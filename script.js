document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.particles');
  const colors = ['#ff00cc', '#00ffff', '#ffff00', '#ff9900', '#33ccff'];
  
  function createParticle() {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 5 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${particle.style.backgroundColor}`;
      
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      particle.style.left = startX + 'px';
      particle.style.top = startY + 'px';
      
      container.appendChild(particle);
      
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const life = Math.random() * 5000 + 3000;
      
      let opacity = 1;
      const fadeOut = setInterval(() => {
          opacity -= 0.01;
          particle.style.opacity = opacity;
          
          if (opacity <= 0) {
              clearInterval(fadeOut);
              particle.remove();
              createParticle();
          }
      }, life / 100);
      
      const move = setInterval(() => {
          const currentX = parseFloat(particle.style.left);
          const currentY = parseFloat(particle.style.top);
          
          particle.style.left = (currentX + Math.cos(angle) * speed) + 'px';
          particle.style.top = (currentY + Math.sin(angle) * speed) + 'px';
          
          if (currentX < -10 || currentX > window.innerWidth + 10 || 
              currentY < -10 || currentY > window.innerHeight + 10) {
              clearInterval(move);
              particle.remove();
              createParticle();
          }
      }, 30);
  }
  
  for (let i = 0; i < 100; i++) {
      createParticle();
  }
  
  // Effet de clic pour ajouter des étoiles
  document.addEventListener('click', function(e) {
      for (let i = 0; i < 10; i++) {
          setTimeout(() => {
              const star = document.createElement('div');
              star.style.position = 'absolute';
              star.style.left = e.clientX + 'px';
              star.style.top = e.clientY + 'px';
              star.style.width = '10px';
              star.style.height = '10px';
              star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
              star.style.borderRadius = '50%';
              star.style.boxShadow = `0 0 15px ${star.style.backgroundColor}`;
              star.style.transform = 'translate(-50%, -50%)';
              star.style.zIndex = '15';
              
              document.body.appendChild(star);
              
              const angle = Math.random() * Math.PI * 2;
              const distance = Math.random() * 100 + 50;
              const duration = Math.random() * 1000 + 500;
              
              const startTime = Date.now();
              
              const animate = () => {
                  const elapsed = Date.now() - startTime;
                  const progress = elapsed / duration;
                  
                  if (progress >= 1) {
                      star.remove();
                      return;
                  }
                  
                  const currentDistance = distance * progress;
                  star.style.left = e.clientX + Math.cos(angle) * currentDistance + 'px';
                  star.style.top = e.clientY + Math.sin(angle) * currentDistance + 'px';
                  star.style.opacity = 1 - progress;
                  
                  requestAnimationFrame(animate);
              };
              
              requestAnimationFrame(animate);
          }, i * 100);
      }
  });
});