// const form = document.querySelector("form"); //menyimpan nilai element form
// form.addEventListener("submit", (a) => {
//   //membuat fungsi addeventlistener untuk membuat ketika user men submit akan teteap pada halaman tersebut
//   a.preventDefault(); //preventdefault adalah kuncinya.
//   console.log("submitted");
// });

// document.querySelector("a").addEventListener("click", (e) => {
//   //membuat fungsi addeventlistener untuk membuat ketika user menklik akan tetap pada halaman tersebut
//   e.preventDefault(); //preventdefault digunakan
//   console.log("langsung masuk google");
// });

const form = document.querySelector("#form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input.value = "";
});

input.addEventListener("change", (e) => {
  console.log("nilai berubah");
});

input.addEventListener("input", (e) => {
  document.querySelector("h1").innerText = input.value;
});

list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});
