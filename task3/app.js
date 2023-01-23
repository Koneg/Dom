let but = document.getElementById("but");
let table = document.getElementById("table");
if (but) {
  but.addEventListener("click", () => {
    table.innerHTML += "<tr><td>January</td><td>$100</td></tr>";
  });
}
