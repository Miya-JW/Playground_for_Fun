const calculator = document.querySelector("#container");
const message = document.querySelector("#message");

const tag = [
  "AC",
  "+/-",
  "%",
  "÷",
  7,
  8,
  9,
  "×",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

for (let i = 0; i < tag.length; i++) {
  let div = document.createElement("div");
  div.className = "calculator";
  div.textContent = tag[i];
  div.className = "cell";

  if (Number.isInteger(tag[i])) {
    div.id = `num_${tag[i]}`;
    div.classList.add("number");
    div.style.gridArea = `num_${tag[i]}`;
  } else {
    div.id = `tag_${i}`;
    div.style.gridArea = `tag_${i}`;
  }
  div.style.color = "#EFEFEF";
  calculator.appendChild(div);
  div.addEventListener("click", () => {
    if (Number.isInteger(tag[i]) || tag[i] == ".") {
      message.textContent += tag[i];
    } else if (tag[i] == "=") {
      message.textContent = "I Miss You";
    } else if (tag[i] == "AC") {
      message.textContent = null;
    } else {
      message.textContent = null;
    }
  });
}
