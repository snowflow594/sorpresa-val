function crearCorazon() {
  const heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.style.position = "fixed";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.opacity = Math.random() * 0.5 + 0.3;
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = "-40px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "caer 5s linear forwards";
  heart.classList.add("corazon");
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(crearCorazon, 300);

const estiloAnimacion = document.createElement("style");
estiloAnimacion.innerHTML = `
@keyframes caer {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

.corazon {
  position: fixed;
  color: #ff4f87;
  z-index: 1000;
  animation: caer 5s linear forwards;
}
`;
document.head.appendChild(estiloAnimacion);

