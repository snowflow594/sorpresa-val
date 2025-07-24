const heart = document.createElement('div');
heart.innerHTML = "❤️";
heart.style.position = 'fixed';
heart.style.top = '-50px';
heart.style.left = Math.random() * window.innerWidth + 'px';
heart.style.fontSize = '24px';
document.body.appendChild(heart);

setInterval(() => {
  const clone = heart.cloneNode(true);
  clone.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(clone);

  let top = -50;
  const fall = setInterval(() => {
    top += 2;
    clone.style.top = top + 'px';
    if (top > window.innerHeight) {
      clearInterval(fall);
      clone.remove();
    }
  }, 30);
}, 500);
