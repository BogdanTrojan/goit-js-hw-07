const inputRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const boxesRef = document.getElementById("boxes");

createBtnRef.addEventListener("click", onCreateBtnClick);
destroyBtnRef.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = inputRef.value;
  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  inputRef.value = "";
}

function createBoxes(amount) {
  destroyBoxes();

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxes.push(div);
    size += 10;
  }

  boxesRef.append(...boxes);
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
