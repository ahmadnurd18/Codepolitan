const generateclr = () => {
  //buat fungsi yang akan mengeksekusi sebuah warna secara acak
  const r = Math.floor(Math.random() * 255); //warna merah sampai max 255
  const g = Math.floor(Math.random() * 255); //warna hijau sampai max 255
  const b = Math.floor(Math.random() * 255); //warna biru sampai max 255

  return `rgb(${r}, ${g}, ${b})`; //mengembalikan nilai
};

// const buttons = document.querySelectorAll("button");   //cara manual
// const heading = document.querySelectorAll("h1");
// for (let button of buttons) {
//   button.addEventListener("click", () => {
//     button.style.backgroundColor = generateclr();
//     button.style.color = generateclr();
//   });
// }
// for (let headings of heading) {
//   headings.addEventListener("click", () => {
//     headings.style.backgroundColor = generateclr();
//     headings.style.color = generateclr();
//   });
// }

const buttons = document.querySelectorAll("button"); //menggunakan this keyword

for (let button of buttons) {
  button.addEventListener("click", colorize);
}
const heading = document.querySelectorAll("h1");
for (let headings of heading) {
  headings.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = generateclr(); //this keyword dapat digunakan ketika nilai yang akan diubah sama memakai fungsi generateclr
  this.style.color = generateclr();
}
