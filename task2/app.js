let but = document.getElementById("but");
let ul = document.getElementById("ul");

let input = document.getElementById("input");
if (but) {
  but.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
  });
}
