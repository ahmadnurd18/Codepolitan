const button = document.querySelector("#changecolor");
const container = document.querySelector("#container");

button.addEventListener("click", (e) => {
  container.style.backgroundColor = generateclr();
  e.stopPropagation();
});

container.addEventListener("click", function () {
  container.classList.toggle("hide");
});

const generateclr = () => {
  //buat fungsi yang akan mengeksekusi sebuah warna secara acak
  const r = Math.floor(Math.random() * 255); //warna merah sampai max 255
  const g = Math.floor(Math.random() * 255); //warna hijau sampai max 255
  const b = Math.floor(Math.random() * 255); //warna biru sampai max 255

  return `rgb(${r}, ${g}, ${b})`; //mengembalikan nilai
};
