const gameDisplay = document.getElementById("sticksDisplay");
const playerNameDisplay = document.getElementById("playerNameDisplay");


let sticksLeft = 21;
let sticksToTake;
let playerTurn = 0;


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
    

    const choice = document.getElementsByName("choice");
    for (let i = 0; i < choice.length; i++){
        if (choice[i].checked){
            sticksToTake = choice[i].value;
        }
    }
    // update amount of sticks
    sticksLeft -= sticksToTake;
    displayStick();
    setTimeout(function(){
        updatePlayer();
    
    }, 300);
    
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