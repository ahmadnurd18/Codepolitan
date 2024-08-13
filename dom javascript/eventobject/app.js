document.querySelector("button").addEventListener("click", (evt) => {
  console.log(evt);
});

const input = document.querySelector("input");
// input.addEventListener("keydown", () => {
//   console.log("tombol ditekan");
// });

// input.addEventListener("keyup", () => {
//   console.log("tombol dilepas");
// });

// input.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   console.log(e.code);
// });

input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("Tombol Atas");
      break;
    case "ArrowDown":
      console.log("Tombol Bawah");
      break;
    case "ArrowLeft":
      console.log("Tombol kiri");
      break;
    case "ArrowRight":
      console.log("Tombol Kanan");
      break;
    default:
      console.log("diabaikan");
  }
});
