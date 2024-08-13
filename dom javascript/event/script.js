function tanggal() {
  const date = (document.getElementById("demo").innerHTML = Date());
}

const button = document.querySelector("#clickme");
button.onclick = function () {
  console.log("Kamu sentuh akuuuuuu");
};

button.onmouseover = scream;

function scream() {
  console.log("jangan sentuh aku");
}

//eventlistener dapat digunakan untuk mengeksekusi dua fungsi yang berbeda secara bersamaan
const eventbtn = document.querySelector("#eventbtn");
eventbtn.addEventListener("click", s1); //fungsi pertama
eventbtn.addEventListener("click", s2); //fungsi kedua //dua fungsi tersebut akan muncul secara bersamaan ketika tombol eventbtn di clik

function s1() {
  console.log("langkah pertama");
}
function s2() {
  console.log("langkah kedua");
}
