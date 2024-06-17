let gameseq = [];
let userseq = [];
let btns = ["yello", "green", "red", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game started");
    started = true;

    levelup();
  }
});

function levelup() {
  level++;
  h2.textContent = `Level ${level}`;

  // Flash a random color:
  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);
  gameseq.push(randomColor);
  console.log(gameseq);

  flashbtn(randomBtn).then(userTurn); 
}

async function flashbtn(btn) {
  btn.classList.add("flash");
  await new Promise((resolve) => setTimeout(resolve, 300)); 
  btn.classList.remove("flash");
}

let allBtns = document.querySelectorAll(".btn");
for (let b of allBtns) {
  b.addEventListener("click", btnPress);
}

function btnPress() {
  let btn = this;
  userflashbtn(btn);
  let userColor = btn.getAttribute("id");
  userseq.push(userColor);
  console.log(userseq);
  checkans();
}

async function userflashbtn(btn) {
  btn.classList.add("userflash");
  await new Promise((resolve) => setTimeout(resolve, 400)); 
  btn.classList.remove("userflash");
}

function checkans() {
  for (let i = 0; i < userseq.length; i++) {
    if (userseq[i] !== gameseq[i]) {
      h2.innerText = "Game Over! Press any key to restart";
      started = false;
      gameseq = [];
      userseq = [];
      return;
    }
  }

  // User sequence matches up to this point, check if it's complete
  if (userseq.length === gameseq.length) {
    console.log("Right answer!");
    userseq = [];
    levelup();
  }
}
