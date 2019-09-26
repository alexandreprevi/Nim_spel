const gameDisplay = document.getElementById("sticksDisplay");
const playerNameDisplay = document.getElementById("playerNameDisplay");
const choice = document.getElementsByName("choice");
const chooseSticksSection = document.getElementById("chooseSticksSection");
const inputSection = document.getElementById("inputSection");
const restartButton = document.getElementById("restartButton");
const restartSection = document.getElementById("restartSection");
const gameDisplaySection = document.getElementById("gameDisplay");
const gif = document.getElementById("gif");


let sticksLeft = 21;
let sticksToTake;
let playerTurn = 0;
let checkWinner = false;

restartSection.style.display = "none";
gameDisplaySection.style.display = "none";
gif.style.display = "none";



function startGame(){
    
    
    getPlayersInfo();
    displayGame();
    displayStick();
    updatePlayer();

}

function getPlayersInfo(){
    
    playerOne = document.getElementById("playerOne");
    playerTwo = document.getElementById("playerTwo");
    
    if (playerOne.value == ""){
        playerOne.value = "Player 1";
    }
    if (playerTwo.value == ""){
        playerTwo.value = "Player 2";
    }
    
}

function displayStick(){

    gameDisplay.innerText = "";
    for(let i = 0; i < sticksLeft; i++){
        gameDisplay.innerText += "|";
    }
}

function takeSticks(){

    
    for (let i = 0; i < choice.length; i++){
        if (choice[i].checked){
            sticksToTake = choice[i].value;
        }
    }

    // update amount of sticks
    sticksLeft -= sticksToTake;
    displayStick();
    checkforWinner();
    if (checkWinner == false){
        setTimeout(function(){ 
            updatePlayer();
        }, 300);
    }
    if (checkWinner == true){
        endOfGameDisplay();
    }
    
   
}



function updatePlayer(){

    // show wich player should play
    if (playerTurn % 2 == 0){
        playerNameDisplay.innerText = playerOne.value;
    } else {
        playerNameDisplay.innerText = playerTwo.value;
    }
    playerTurn++;
}

function checkforWinner(){

    
    if (sticksLeft == 1){
        // last player won
        if (playerTurn % 2 == 0){
            playerNameDisplay.innerText = playerTwo.value+" won";
        } else{
            playerNameDisplay.innerText = playerOne.value+" won";
        }
        return checkWinner = true;
        //stop game  
    }

    if (sticksLeft <= 0){
        // last player lost
        //stop game
        if (playerTurn % 2 == 0){
            playerNameDisplay.innerText = playerOne.value+" won";
        } else{  
            playerNameDisplay.innerText = playerTwo.value+" won";
        }   
        return checkWinner = true;
     }
}

function displayGame(){
    chooseSticksSection.style.display = "flex";
    inputSection.style.display = "none";
    gameDisplaySection.style.display = "flex";
}

function restart(){
    location.reload();
}

function endOfGameDisplay(){
    document.getElementById("toHide").style.display = "none";
    gameDisplaySection.style.display = "none";
    restartSection.style.display = "flex";
    gif.style.display = "flex";

}