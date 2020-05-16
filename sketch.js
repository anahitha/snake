const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snake;
var rez = 20;
var food;
var w;
var h;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
        world = engine.world;
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
    var x = floor(random(w));
    var y = floor(random(h));
    food = createVector(x, y);
  
  }
  
  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      snake.setDir(1, 0);
    } else if (keyCode === DOWN_ARROW) {
      snake.setDir(0, 1);
    } else if (keyCode === UP_ARROW) {
      snake.setDir(0, -1);
    } else if (key == ' ') {
      snake.grow();
    }
  
  }

function draw(){
    Engine.update(engine);
    scale(rez);
  background("green");
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background("red");
    noLoop();
  }

  noStroke();
  fill("pink");
  rect(food.x, food.y, 1, 1);


}