const delayedChangecolor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedChangecolor("red", 1000)
//   .then(() => delayedChangecolor("yellow", 1000))
//   .then(() => delayedChangecolor("green", 1000))
//   .then(() => delayedChangecolor("blue", 1000))
//   .then(() => delayedChangecolor("purple", 1000))
//   .then(() => delayedChangecolor("black", 1000));

async function changeColor() {
  await delayedChangecolor("red", 1000);
  await delayedChangecolor("yellow", 1000);
  await delayedChangecolor("green", 1000);
  await delayedChangecolor("blue", 1000);
  await delayedChangecolor("black", 1000);
  await delayedChangecolor("purple", 1000);
  return "all Done";
}

changeColor().then((respon) => console.log(respon));
