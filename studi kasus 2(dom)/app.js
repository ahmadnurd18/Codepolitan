const p1display = document.querySelector("#p1-display");
const p2display = document.querySelector("#p2-display");
const p1button = document.querySelector("#p1-button");
const p2button = document.querySelector("#p2-button");
const resetbutton = document.querySelector("#reset");
const winpointopt = document.querySelector("#winpoint");

let p1score = 0;
let p2score = 0;
let winpoint = 3;
let isGameover = false;

function reset() {
  isGameover = false;
  p1score = 0;
  p2score = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
}

const pemain1 = () => {
  if (!isGameover) {
    p1score += 1;
    if (p1score === winpoint) {
      isGameover = true;
    }
    p1display.textContent = p1score;
  }
};

const pemain2 = () => {
  if (!isGameover) {
    p2score += 1;
    if (p2score === winpoint) {
      isGameover = true;
    }
    p2display.textContent = p2score;
  }
};
p1button.addEventListener("click", pemain1);
p2button.addEventListener("click", pemain2);
pemain2.addEventListener("input", (e) => {
  console.log("pemain 2 menang");
});

resetbutton.addEventListener("click", reset);

winpointopt.addEventListener("change", function () {
  winpoint = parseInt(this.value);
  reset();
});
