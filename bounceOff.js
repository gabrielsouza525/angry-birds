var retFixo, retMovendo;
var quadrado1, quadrado2;

function bouceOff(gabriel,julia){
  if (gabriel.x - julia.x < julia.width / 2 + gabriel.width / 2 &&
    julia.x - gabriel.x < julia.width / 2 + gabriel.width / 2) {
        gabriel.velocityX=gabriel.velocityX *(-1)
        julia.velocityX=julia.velocityX *(-1)
  }

  if (gabriel.y - julia.y <julia.height /2 + gabriel.height / 2 &&
    julia.y - gabriel.y <julia.height /2 + gabriel.height / 2){
    gabriel.velocityY=gabriel.velocityY *(-1)
    julia.velocityY=julia.velocityY *(-1)
  }
}
function setup() {
  createCanvas(1200, 800);
  retFixo = createSprite(400, 100, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retFixo.velocityY=5
  retMovendo = createSprite(400, 800, 80, 30);
  retMovendo.velocityY=-5
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
  quadrado1 = createSprite(50,400,50,50)
  quadrado1.shapeColor="pink"
  quadrado1.velocityX=5
  quadrado2 = createSprite(1150,400,50,50)
  quadrado2.shapeColor="yellow"
  quadrado2.velocityX=-5
}
function draw() {
  background("black");
  
  drawSprites();
  bouceOff(retMovendo, retFixo);
  bouceOff(quadrado1, quadrado2);

}
