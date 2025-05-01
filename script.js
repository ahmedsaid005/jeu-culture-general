// Un petit effet bonus : un texte qui s'écrit lettre par lettre 💌

const msg = "Je t'aime, IDA JOSE MARIE MONTEIRO 💘";
const messageEl = document.querySelector(".message");
let index = 0;

function typeWriter() {
  if (index < msg.length) {
    messageEl.textContent += msg.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

messageEl.textContent = "";
typeWriter();
