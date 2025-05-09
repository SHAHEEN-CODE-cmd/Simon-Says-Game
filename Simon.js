let gameSeq=[];
let userSeq=[];

let btns=["yellow","red", "purple", "green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
btn.classList.add("flash")
setTimeout(function(){
    btn.classList.remove("flash");
},300);
}

function userFlash(btn){
btn.classList.add("userflash")
setTimeout(function(){
    btn.classList.remove("userflash");
},300);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

//random btn choose
let randIdx=Math.floor(Math.random()*3);
let randomColor=btns[randIdx];
let randomBtn=document.querySelector(`.${randomColor}`);
// console.log(randIdx);
// console.log(randomColor);
// console.log(randomBtn);
gameSeq.push(randomColor);
console.log(gameSeq);
gameFlash(randomBtn);
}

function checkAns(idx){
    // console.log("current level",level);
    // let idx=level-1;

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";

        },150)
        reset();
    }
}

function btnpress(){
    // console.log(this)
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userColor);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
