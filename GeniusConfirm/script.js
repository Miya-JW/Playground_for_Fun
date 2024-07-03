document.querySelector(".yes").addEventListener("click", () => {
  alert("YOU ARE A GENIUS!!!!!🎉");
});
let btn = document.querySelector(".no");
btn.addEventListener("mouseover", () => {
  const vh = window.innerHeight - btn.offsetHeight;
  const vw = window.innerWidth - btn.offsetWidth;
  const newTop = Math.random() * vh;
  const newLeft = Math.random() * vw;
  btn.style.top = `${newTop}px`;
  btn.style.left = `${newLeft}px`;
});
