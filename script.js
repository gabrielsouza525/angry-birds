const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var caixa1, caixa2, caixa3, caixa4, caixa5;
var pig1;

function setup() {
  createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);

  caixa1 = new Box(700, 320, 70, 70);
  caixa2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810, 260, 300, PI / 2);

  caixa3 = new Box(700, 240, 70, 70);
  caixa4 = new Box(920, 240, 70, 70);
  pig3 = new Pig(810, 220);

  log3 = new Log(810, 180, 300, PI / 2);

  caixa5 = new Box(810, 160, 70, 70);
  log4 = new Log(760, 120, 150, PI / 7);
  log5 = new Log(870, 120, 150, -PI / 7);

  //   bird = new Bird(100, 100);
}

function draw() {
  background("black");

  Engine.update(engine);

  caixa1.display();
  caixa2.display();
  ground.display();
  pig1.display();
  log1.display();

  caixa3.display();
  caixa4.display();
  pig3.display();
  log3.display();

  caixa5.display();
  log4.display();
  log5.display();

  //   bird.display();
}
