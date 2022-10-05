// Score
let score = 0;

// Game Board Items
const board = document.getElementById("board");
const snake = board.getContext("2d");
const food = board.getContext("2d");

// Movement
// (let x = board.width / 2) because x goes sideways on the axis.
let snakeX = board.width / 2;
// (let y = board.height) because goes up on the axis.
let snakeY = board.height - 300;

let foodX = board.width / 4;
let foodY = board.height + 200;


// the direction on the axis
let snakeRight = 20;
let snakeUp = -20;


// button to start game

alert('Start Game');
  

window.onload = function(){
    document.addEventListener('keydown', (e) =>{
      keyPress(e)  
    })
}

function keyPress (e){
    if(e.key === "ArrowRight"){
        snakeX = snakeX + 20
    }
    if(e.key === "ArrowLeft"){
        snakeX = snakeX + -20
    }
    if(e.key === "ArrowUp"){
        snakeY = snakeY - 20
    }
    if(e.key === "ArrowDown"){
        snakeY = snakeY + 20
    }
}


function foodSpawn() {
    snake.beginPath();
    snake.rect(foodX, foodY, 20, 20);
    snake.fillStyle = "White";
    snake.fill();
    snake.closePath();
  }

function snakeLooks() {
  snake.beginPath();
  snake.rect(snakeX, snakeY, 20, 20);
  snake.fillStyle = "yellow";
  snake.fill();
  snake.closePath();
}

function drawSnake(){
    // this resets the block the snake is on before so it looks like it is moving.
    snake.clearRect(0, 0, board.width, board.height);
    snakeLooks();
    // dx += snakeRight;
    // dy += snakeUp;
    if (snakeY < 0 || snakeY > board.height -20 || snakeX < 0 || snakeX > board.width-20){
        endGame()
    }
    function endGame (){
        alert("game over")
    }
} 

setInterval(drawSnake, 100);
