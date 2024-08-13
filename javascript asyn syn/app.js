// const perkalian = (x, y) => x * y;
// const akar = (x) => perkalian(x, x);
// const phytagoras = (a, b, c) => akar(a) + akar(b) === akar(c);

// phytagoras(3, 4, 5);

console.log("Pertama muncul");
setTimeout(() => {
  console.log("Dijalankan setelah 3 detik");
}, 3000);
console.log("Kedua muncul");

setTimeout(function () {
  document.body.style.backgroundColor = "red";
}, 1000);
setTimeout(function () {
  document.body.style.backgroundColor = "yellow";
}, 2000);
setTimeout(function () {
  document.body.style.backgroundColor = "green";
}, 3000);
