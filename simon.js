let gameseq=[];
let userseq=[];
let btns=["yello","green","red","blue"];

let started=false;
let level=0; 

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(!started){
        console.log("game started");
        started=true;
       
        levelup();
    }
});
function levelup(){
    level++;
    h2.textContent=`Level ${level}`;

    //flash rendom color: 
   let rendomidx=Math.floor(Math.random() * 3);
   let rendomcolor=btns[rendomidx];
   let rendombtn=document.querySelector(`.${rendomcolor}`)
    gameseq.push(rendomcolor);
    console.log(gameseq);
   flashbtn(rendombtn);
}

function flashbtn(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash")
     }, 300);
}

let allbtns=document.querySelectorAll(".btn");
for(let b of allbtns){
    b.addEventListener("click",btnPress);
}
function btnPress(){
    let btn=this;
    userflashbtn(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans();
}

function userflashbtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash")
    }, 400);
}



// function checkans(){
//     let idx=-1;
//     console.log("level",idx);
//     if(userseq[idx]===gameseq[idx]){
//         console.log("right ans"); 
//     }
//     else{
//         h2.innerText="Game overpress any key to  restart"
//     }
// }

function checkans() {
    for (let i = 0; i < userseq.length; i++) {
      if (userseq[i] !== gameseq[i]) {
        h2.innerText = "Game Over! Press any key to restart";
        started = false; // Reset game state
        gameseq = []; // Clear sequence
        userseq = []; // Clear user sequence
        return; // Exit the function after finding a mismatch
      }
    }
    // User sequence matches up to this point, check if it's complete
    if (userseq.length === gameseq.length) {
      console.log("Right answer!");
      userseq = []; // Clear user sequence for the next level
      levelup();
    }
}



