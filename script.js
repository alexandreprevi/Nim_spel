const gameDisplay = document.getElementById("sticksDisplay");
const playerNameDisplay = document.getElementById("playerNameDisplay");
const choice = document.getElementsByName("choice");


let sticksLeft = 6;
let sticksToTake;
let playerTurn = 0;
let checkWinner = false;


function startGame(){
    
    getPlayersInfo();
    displayStick();
    updatePlayer();

}

function getPlayersInfo(){
    const playerOne = document.getElementById("playerOne").value;
    const playerTwo = document.getElementById("playerTwo").value;
}

function displayStick(){

    resetSticks();
    
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
    console.log(checkWinner);
    if (checkWinner == false){
        setTimeout(function(){ 
            updatePlayer();
        }, 300);
    }
   
}

function resetSticks(){
    gameDisplay.innerText = "";
}


function updatePlayer(){

    // show wich player should play
    if (playerTurn % 2 == 0){
        playerNameDisplay.innerText = `${playerOne.value}'s turn `;
    } else {
        playerNameDisplay.innerText = `${playerTwo.value}'s turn `;
    }
    playerTurn++;
}

function checkforWinner(){

    
    if (sticksLeft == 1){
        // last player won
        if (playerTurn % 2 == 0){
            playerNameDisplay.innerText = "B won";
        } else{
            playerNameDisplay.innerText = "A won";
        }
        return checkWinner = true;
        //stop game  
    }

    if (sticksLeft <= 0){
        // last player lost
        //stop game
        if (playerTurn % 2 == 0){
            playerNameDisplay.innerText = "A won";    
        } else{  
            playerNameDisplay.innerText = "B won";
        }   
        return checkWinner = true;
     }
}