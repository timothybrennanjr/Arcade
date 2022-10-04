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
let snakeY = board.height - 100;

// the direction on the axis
let snakeRight = 20;
let snakeLeft = -20;

function snakeMove() {
  // .clearReact(0, 0, board.width, board.height); just resets the default parameters from the board.
  snake.clearRect(0, 0, board.width, board.height);
  snake.beginPath();
  snake.rect(snakeX, snakeY, 20, 20);
  snake.fillStyle = "yellow";
  snake.fill();
  snake.closePath();

  snakeY += snakeLeft;
}
setInterval(snakeMove, 200);

function allThingsFood() {
  food.beginPath();
  food.rect(50, 50, 20, 20);
  food.fillStyle = "red";
  food.fill();
  food.closePath();
}
