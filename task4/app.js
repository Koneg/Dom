let but = document.getElementById("but");
let par = document.getElementById("par");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");
if (but) {
  but.addEventListener("click", () => {
    par.style.color = "black";
  });
}
if (but2) {
  but2.addEventListener("click", () => {
    par.style.color = "yellow";
  });
}
if (but3) {
  but3.addEventListener("click", () => {
    par.style.color = "red";
  });
}
