var shooter;
var shooterImage;

function preload() {
  shooterImage = loadImage("shooter.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  shooter = createSprite(600, 400, 50, 50);
  shooter.addImage(shooterImage)
  shooter.scale = 0.5;
}

function draw() {
  background(0,0,0);  

  if(keyDown("up")) {
    shooter.y = shooter.y-5
  }

  if(keyDown("down")) {
    shooter.y = shooter.y+5
  }

  if(keyDown("right")) {
    shooter.x = shooter.x+5
  }

  if(keyDown("left")) {
    shooter.x = shooter.x-5
  }


  drawSprites();
}