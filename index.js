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

let foodX = 20;
let foodY = 580;

let snakeSizeWidth = 20
let snakeSizeHeight = 20

// the direction on the axis
let snakeRight = 20;
let snakeUp = -20;

window.onload = function () {
  document.addEventListener("keydown", (e) => {
    keyPress(e);
  });
};

function startGame(){
foodSpawn()
snakeSpawn()
}

foodSpawn();

function changeFood(){
    min = 20
    max = 580
    return Math.random() * (max - min) + min;
}


function keyPress(e) {
  if (e.key === "ArrowRight") {
    snakeX = snakeX + 20;
  }
  if (e.key === "ArrowLeft") {
    snakeX = snakeX + -20;
  }
  if (e.key === "ArrowUp") {
    snakeY = snakeY - 20;
  }
  if (e.key === "ArrowDown") {
    snakeY = snakeY + 20;
  }
  addToSnake()
}

function foodSpawn() {
food.clearRect(0, 0, board.width, board.height);
  food.beginPath();
  food.rect(changeFood(), changeFood(), 20, 20);
  food.fillStyle = "White";
  food.fill();
  food.closePath();
}


function snakeLooks() {
  snake.beginPath();
  snake.rect(snakeX, snakeY, 20, 20);
  snake.fillStyle = "yellow";
  snake.fill();
  snake.closePath();
}

function snakeSpawn() {
  // this resets the block the snake is on before so it looks like it is moving.
  snakeLooks();
  snake.clearRect(0, 0, 0, 0);
  // snakeX += snakeRight;
//   snakeY += snakeUp;
  if (
    snakeY < 0 ||
    snakeY > board.height - 20 ||
    snakeX < 0 ||
    snakeX > board.width - 20
  ) {
    endGame();
  }
  
}
setInterval(snakeSpawn, 100);

function endGame() {
    alert("game over");
  }

function addToSnake(){
    if (snakeX === foodX && snakeY === foodY){
        snakeSizeHeight = snakeSizeHeight * 2;
        foodSpawn()
    }
}

