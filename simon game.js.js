let gameSeq = [];
let userSeq = [];


let btns = [ "red","yellow", "green", "purple" ];
 

let started = false;
let level = 0;


let h2 = document.querySelector("h2");
document.addEventListener("click", function(){
    if(started == false){
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250);

    

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 100);

    

}
function levelUp(){
    userSeq = [];
    level ++;
    h2.innerText = ` Continue press key and Level :- ${level}`;

    let randIndx = Math.floor(Math.random() *4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
   /* console.log(randIndx);
    console.log(randColor);
    console.log(randBtn);*/
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }

    }else{
       h2.innerHTML = ` Game over! Your score was :- <b>${level}</b> <br>  Press key to start.`;
       document.querySelector("body").style.backgroundcolor = "red" ;
       setTimeout(function (){
        document.querySelector("body").style.backgroundcolor = "white";
        reset();
       }, 250);
    } 
}  

 function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
   
    checkAns(userSeq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
 }
 