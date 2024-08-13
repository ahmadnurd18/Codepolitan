// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
// 	// console.log(img.src);
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

const links = document.querySelectorAll("a");

// for (let link of links) {
//   link.innerText = "saya adalah link`";
// }

for (let link of links) {
  link.style.color = "rgb(300, 108, 134)";
  link.style.textDecorationColor = "black";
  link.style.textDecorationStyle = "double";
}

function Change() {
  const change = (document.getElementById("paragraf").innerHTML =
    "Hello World");
  return change;
}
