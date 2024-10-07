let gameSeq=[];
let userSeq=[];

let btns=["red","green","blue","yellow"];
let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(){
    //console.log("curr level:",level);
    let idx=level-1;

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);
            //levelUp();
        }
        console.log("same");
    }else{
        h2.innerHTML=`Game over!<b>${level}</b> <br>press any key to start`; 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();   
    }
}
function btnPress(){
    let btn=this;
    //console.log("button pressed");
    userFlash(btn);

    userColor=btn.getAttribute("id");
   // console.log(userColor);
    userSeq.push(userColor);
    checkAns();
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;

}