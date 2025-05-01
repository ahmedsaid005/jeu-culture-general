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
      
      // Position initiale aléatoire
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      
      container.appendChild(particle);
      
      // Animation
      const duration = Math.random() * 10000 + 5000;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.1;
      
      const startTime = Date.now();
      
      function animate() {
          const elapsed = Date.now() - startTime;
          const progress = elapsed / duration;
          
          if (progress > 1) {
              particle.remove();
              createParticle();
              return;
          }
          
          const x = parseFloat(particle.style.left) + Math.cos(angle) * speed;
          const y = parseFloat(particle.style.top) + Math.sin(angle) * speed;
          
          particle.style.left = x + 'vw';
          particle.style.top = y + 'vh';
          particle.style.opacity = 1 - progress;
          
          requestAnimationFrame(animate);
      }
      
      requestAnimationFrame(animate);
  }
  
  // Créer 50 particules initiales
  for (let i = 0; i < 50; i++) {
      createParticle();
  }
  
  // Effet spécial au clic
  document.addEventListener('click', function(e) {
      for (let i = 0; i < 10; i++) {
          const star = document.createElement('div');
          star.style.position = 'fixed';
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
          
          function animateStar() {
              const elapsed = Date.now() - startTime;
              const progress = elapsed / duration;
              
              if (progress >= 1) {
                  star.remove();
                  return;
              }
              
              const x = e.clientX + Math.cos(angle) * distance * progress;
              const y = e.clientY + Math.sin(angle) * distance * progress;
              
              star.style.left = x + 'px';
              star.style.top = y + 'px';
              star.style.opacity = 1 - progress;
              
              requestAnimationFrame(animateStar);
          }
          
          requestAnimationFrame(animateStar);
      }
  });
});