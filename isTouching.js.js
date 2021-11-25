var retFixo, retMovendo;
var quadrado1, quadrado2, quadrado3, quadrado4;

function isTouching(sprite1,sprite2){
  if (sprite1.x - sprite2.x < sprite2.width / 2 + sprite1.width / 2 &&
    sprite2.x - sprite1.x < sprite2.width / 2 + sprite1.width / 2 &&
    sprite1.y - sprite2.y <sprite2.height /2 + sprite1.height / 2 &&
    sprite2.y - sprite1.y <sprite2.height /2 + sprite1.height / 2) {
   
   return true
  } else {
    
    return false
  }
}
function setup() {
  createCanvas(1200, 800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 200, 80, 30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
  quadrado1 = createSprite(100, 100, 50, 50);
  quadrado1.shapeColor = "white"
  quadrado2 = createSprite(200, 100, 50, 50);
  quadrado2.shapeColor = "white"
  quadrado3 = createSprite(300, 100, 50, 50);
  quadrado3.shapeColor = "white"
  quadrado4 = createSprite(400, 100, 50, 50);
  quadrado4.shapeColor = "white"
}
function draw() {
  background(0, 0, 0);
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
  if (isTouching(retMovendo, quadrado2)) {
   retMovendo.shapeColor = "red";
   retFixo.shapeColor = "red";
  } else {
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }
  drawSprites();
  
}
