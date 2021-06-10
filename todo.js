const todoForm = document.querySelector(".todoForm");
const ul = document.querySelector(".js-todos");

let todoArr = [];

function loadToDos() {
  const todos = localStorage.getItem("todos");
  const parsedToDos = JSON.parse(todos);
  todoArr = parsedToDos;
  if (todoArr === null) {
    todoArr = [];
  }
}

function handleClick(event) {
  const li = event.target.parentNode;
  ul.removeChild(li);
  const filteredArr = todoArr.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  todoArr = filteredArr;
  saveToDos();
}

function paintToDo(text, id) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  li.id = id;
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleClick);
  li.appendChild(delBtn);
  li.appendChild(span);
  ul.appendChild(li);
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

function handleSubmit(event) {
  event.preventDefault();
  const todo = event.target.querySelector("input");
  const todoObj = {
    text: todo.value,
    id: Date.now(),
  };
  todoArr.push(todoObj);
  saveToDos();
  paintToDo(todo.value, todoObj.id);
  todo.value = "";
}

function init() {
  loadToDos();
  todoArr.forEach(function (todo) {
    paintToDo(todo.text, todo.id);
  });
  todoForm.addEventListener("submit", handleSubmit);
}

init();
