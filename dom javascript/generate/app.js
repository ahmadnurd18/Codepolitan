//mengubah warna html pada dom js

const h1 = document.querySelector("#h1"); //menyimpan nilai #h1 menjadi h1
const button = document.querySelector("#generate"); //menyimpan nilai #generate menjadi button

button.addEventListener("click", () => {
  //buat sebuah fungsi dengan addeventlistener ketika tombol #generate di klik warna dan tulisan berubah
  const newcolor = generateclr(); //simpan nilai generateclr ke dalam newcolor
  document.body.style.backgroundColor = newcolor; //mengubah warna html
  h1.innerHTML = newcolor; //mengubah tulisan h1
});
const generateclr = () => {
  //buat fungsi yang akan mengeksekusi sebuah warna secara acak
  const r = Math.floor(Math.random() * 255); //warna merah sampai max 255
  const g = Math.floor(Math.random() * 255); //warna hijau sampai max 255
  const b = Math.floor(Math.random() * 255); //warna biru sampai max 255

  return `rgb(${r}, ${g}, ${b})`; //mengembalikan nilai
};
