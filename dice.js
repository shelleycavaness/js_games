let currentScore = 0;
let randomNum = 0;
let globalScore =0;
const theDice = document.getElementById('roll');
const total = document.getElementById('total');
const holdRound = document.getElementById('hold');
const playerScore = document.getElementById('playerGlobalScore')

let currentScore2 = 0;
let randomNum2 = 0;
let globalScore2 =0;
const theDice2 = document.getElementById('roll2');
const total2 = document.getElementById('total2');
const holdRound2 = document.getElementById('hold2');
const playerScore2 = document.getElementById('playerGlobalScore2')
/*******player 1 functions************/
holdRound.addEventListener("click", getGlobalScore);
theDice.addEventListener("click", mere);
function mere(){
    calculCurrentScore();
    changeImage();
} 
function calculCurrentScore(){  
    randomNum = Math.floor(Math.random() *6 +1);
    if(randomNum === 1){
        currentScore  = 0;   
        alert('next player');
    } else {
    currentScore  += randomNum;
    }
    total.innerHTML = currentScore;
    // console.log(randomNum);
}
function changeImage(){   
    const elem = document.getElementById("imgDisp");
    switch(randomNum){
      case 1:
        elem.src ="images/dice-1.png";
        break;
     case 2:
        elem.src ="images/dice-2.png";
        break;
     case 3:
        elem.src ="images/dice-3.png";
        break;
    case 4:
        elem.src ="images/dice-4.png";
        break;
    case 5:
        elem.src ="images/dice-5.png";
        break;
    case 6:
        elem.src ="images/dice-6.png";
        break;
        default:
    }
    
}
function getGlobalScore(){
    globalScore += currentScore;
    playerScore.innerHTML = globalScore;
    currentScore = 0;
    total.innerHTML = currentScore;
}
/*****************player 2 functions*****************************/
holdRound2.addEventListener("click", getGlobalScore2);
theDice2.addEventListener("click", parent);
function parent(){
    calculCurrentScore2();
    changeImage2();
}
function calculCurrentScore2(){
    randomNum2 = Math.floor(Math.random() *6 +1);
    if(randomNum2 === 1){
        currentScore2 = 0;
        alert('next player');
    } else{
        currentScore2 += randomNum2;
    } 
    total2.innerHTML = currentScore2; 
//  console.log(randomNum2);
}
function getGlobalScore2(){
    globalScore2 += currentScore2;
    playerScore2.innerHTML = globalScore2;
    currentScore2 = 0;
    total2.innerHTML = currentScore2;
}

function changeImage2(){   
    const elem = document.getElementById("imgDisp");
    switch(randomNum2){
      case 1:
        elem.src ="images/dice-1.png";
        break;
     case 2:
        elem.src ="images/dice-2.png";
        break;
     case 3:
        elem.src ="images/dice-3.png";
        break;
    case 4:
        elem.src ="images/dice-4.png";
        break;
    case 5:
        elem.src ="images/dice-5.png";
        break;
    case 6:
        elem.src ="images/dice-6.png";
        break;
        default:
    }
    
}