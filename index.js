//initializing some value

let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;


// finding element

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessigNumber = form.querySelector("#guessigNumber");
const checkButton = form.querySelector("#check-button");
const resultText = cardBody.querySelector(".resultText");
const lostWonmessage = document.createElement("p");

const remainingAttempts = cardBody.querySelector(".remainingAttempts");



form.addEventListener("submit", function (event){
    event.preventDefault();


    attempts++;
    if(attempts === 5){
        guessigNumber.disabled = true;
        checkButton.disabled = true;
    }

    if(attempts < 6) {
        let guessNumber = Number(guessigNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attemts: ${totalAttempts - attempts}`;
    }

    guessigNumber.value = ""; 

});

function checkResult(guessigNumber) {
   const randomNumber = getRandomNumber(5);


   if(guessigNumber === randomNumber){
    resultText.innerHTML = `You have Won`;

    totalWons++;

   }else{
    resultText.innerHTML = `You have lost; Random number was: ${randomNumber}`;

    totalLosts++;
   }

   lostWonmessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;

   lostWonmessage.classList.add("large-text");
   cardBody.appendChild(lostWonmessage);
    
}

function getRandomNumber(limit){
    return Math.floor( Math.random() * limit) + 5;
}
