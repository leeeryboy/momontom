const greeting = document.querySelector(".js-greeting"),
  nameForm = document.querySelector(".nameForm"),
  nameInput = nameForm.querySelector("input");

function removenameInput() {
  nameInput.classList.add("name-exist");
}

function loadName() {
  const name = localStorage.getItem("name");
  if (name !== null) {
    removenameInput();
    greeting.innerText = `Hello ${name}`;
  }
}

function saveName(name) {
  localStorage.setItem("name", name);
}

function handleSubmit(event) {
  event.preventDefault();
  saveName(nameInput.value);
  loadName();
  removenameInput();
}

function init() {
  loadName();
  nameForm.addEventListener("submit", handleSubmit);
}

init();
