let text = document.getElementById("text");
let deleteBtn = document.querySelector(".delete-all");
let tasks = document.querySelector(".tasks");
let container = document.querySelector(".container");
deleteBtn.addEventListener("click", () => {
  console.log("clack");
});
console.log(deleteBtn.innerHTML, container.innerText);

text.addEventListener("change", () => {
  tasks.innerText = text.value;
  console.log("zamena");
});
