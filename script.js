const gameDisplay = document.getElementById("sticksDisplay");
const playerNameDisplay = document.getElementById("playerNameDisplay");
const choice = document.getElementsByName("choice");
const chooseSticksSection = document.getElementById("chooseSticksSection");
const inputSection = document.getElementById("inputSection");
const restartButton = document.getElementById("restartButton");
const restartSection = document.getElementById("restartSection");
const gameDisplaySection = document.getElementById("gameDisplay");
const gif = document.getElementById("gif");
const takeButton = document.getElementById("takeButton");

let sticksLeft = 21;
let sticksToTake;
let playerTurn = 0;
let weHaveAWinner = false;

restartSection.style.display = "none";
gameDisplaySection.style.display = "none";
gif.style.display = "none";


function checkforWinner(){
    if (sticksLeft == 1){
        // last player won
        if (playerTurn % 2 == 0){
            playerNameDisplay.innerText = playerTwo.value+" won";
        } else{
            playerNameDisplay.innerText = playerOne.value+" won";
        }
        return weHaveAWinner = true;        
    }

    if (sticksLeft <= 0){
        // last player lost
        // stop game
        if (playerTurn % 2 == 0){
            playerNameDisplay.innerText = playerOne.value+" won";
        } else{  
            playerNameDisplay.innerText = playerTwo.value+" won";
        }   
        return weHaveAWinner = true;
     }
}

function startGame(){    
    getPlayersInfo();
    displayGame();
    displayStick();
    updatePlayer();
}

function getPlayersInfo(){    
    let playerOne = document.getElementById("playerOne");
    let playerTwo = document.getElementById("playerTwo");
    
    // if no input by players
    if (playerOne.value == ""){
        playerOne.value = "Player 1";
    }
    if (playerTwo.value == ""){
        playerTwo.value = "Player 2";
    }
}

function displayGame(){
    inputSection.style.display = "none";
    chooseSticksSection.style.display = "flex";
    gameDisplaySection.style.display = "flex";
}

function displayStick(){
    let imagen;
    // Clear the display each time before printing the sticks
    gameDisplay.innerHTML = "";

    // Print an stick-image per stickLeft
    for (let i = 0; i < sticksLeft; i++) {
        imagen = document.createElement("img");
        imagen.src = "bilder/pinne.png";
        gameDisplay.appendChild(imagen);
    }
}

function takeSticks(){
    // disable button 
    takeButton.disabled = true;
    // get how many sticks the player wants to take
    for (let i = 0; i < choice.length; i++){
        if (choice[i].checked){
            sticksToTake = choice[i].value;
        }
    }

    // update amount of sticks
    sticksLeft -= sticksToTake;
    displayStick();
    checkforWinner();
    if (weHaveAWinner == false){
        setTimeout(function(){ 
            updatePlayer();
            takeButton.disabled = false;
            // reable button
        }, 300);
    }
    if (weHaveAWinner == true){
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

function restart(){
    location.reload();
}

function endOfGameDisplay(){
    document.getElementById("toHide").style.display = "none";
    gameDisplaySection.style.display = "none";
    restartSection.style.display = "flex";
    gif.style.display = "flex";
}