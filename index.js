// Score
let score = 0;

// Board
const blockSize = 25;
const rows = 25;
const columns = 25;
let board;
let context;

// Snake head
let snakeX = blockSize
let snakeY = blockSize

let bodyOfSnake = [];

let foodX;
let foodY;

let speedX = 0;
let speedY = 0;

window.onload = function () {
  newGame()
};
function newGame(){
    board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = columns * blockSize;
  context = board.getContext("2d");

  document.addEventListener("keydown", changeDirection);
  foodPlace();
  setInterval(update, 100);
  
}

function update() {
    gameEnd()
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "white";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    bodyOfSnake.push([foodX, foodY])
    foodPlace()
  }

   for(let i = bodyOfSnake.length - 1; i > 0; i--){
    bodyOfSnake[i] = bodyOfSnake[i - 1];
   }

   if(bodyOfSnake.length){
    bodyOfSnake[0] = [snakeX, snakeY]
   }

  context.fillStyle = "blue";
  snakeX += speedX * blockSize;
  snakeY += speedY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < bodyOfSnake.length; i++) {
    context.fillRect(bodyOfSnake[i][0], bodyOfSnake[i][1], blockSize, blockSize)
  }

}

function foodPlace() {
  foodX = Math.floor(Math.random() * columns) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
  points();
}

function changeDirection(e) {
  if (e.key === "ArrowRight" && speedX != -1) {
    speedX = 1;
    speedY = 0;
  }
  if (e.key === "ArrowLeft" && speedX != 1) {
    speedX = -1;
    speedY = 0;
  }
  if (e.key === "ArrowUp" && speedY != 1) {
    speedX = 0;
    speedY = -1;
  }
  if (e.key === "ArrowDown" && speedY != -1) {
    speedX = 0;
    speedY = 1;
  }
}

function updateElementValue(elementId, value) {
    const element = document.getElementById(elementId)
    
    element.value = value;
}

function points() {
    let score = Math.floor(document.getElementById("score").value);
    score = score + 1;
  console.log(score)
    updateElementValue("score", score)
  }



function gameEnd() {
  if (
    snakeY < 0 ||
    snakeY > board.height - 20 ||
    snakeX < 0 ||
    snakeX > board.width - 20
  ) {
    alert("GAME OVER", 1)
  }
}


