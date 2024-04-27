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

function flashbtn(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash")
     }, 200);
}
function userflashbtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash")
    }, 200);
}

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

function checkans(){
    let idx=level -1;
    console.log("level",idx);
    if(userseq[idx]===gameseq[idx]){
        console.log("right ans"); 
    }
    else{
        h2.innerText="Game overpress any key to  restart"
    }
}

// adding event listener in btn s
function btnPress(){
    let btn=this;
    userflashbtn(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans();
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

