const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint

var engine, world;
var caixa1, caixa2, caixa3, caixa4, caixa5;
var pig1;
var plataforma;
var bird;
var fundo;
var estilingue;
var estado="inicio"
var fundoPadrao="sprites/bg.png"
var pontuacao=0
var cor="black"

function preload() {
  escolheFundo()
}

function setup() {
  createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Chao(600, height, 1200, 20);
  plataforma=new Chao(150, 305, 300, 170)

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

  bird = new Bird(200, 50);

  estilingue = new Estilingue(bird.corpo,{x:200,y:50})
}

function draw() {
  if (fundo) {
    background(fundo)
  }

  fill(cor)
  text("Pontuação:"+pontuacao,1000, 40)

  Engine.update(engine);

  caixa1.display();
  caixa2.display();
  ground.display();
  pig1.display();
  log1.display();
  pig1.placar();

  caixa3.display();
  caixa4.display();
  pig3.display();
  log3.display();
  pig3.placar();

  caixa5.display();
  log4.display();
  log5.display();
  plataforma.display();
  bird.display();
  estilingue.display();
}

function mouseDragged(){
  if (estado !=="jogar") {
    Matter.Body.setPosition(bird.corpo, {x: mouseX,y: mouseY})
  }
}

function mouseReleased(){
  estilingue.lanca()
  estado="jogar"
}

function keyPressed(){
  if (keyCode===32 && bird.corpo.speed<1) {
    bird.trajetoria=[]
    Matter.Body.setPosition(bird.corpo, {x: 200,y: 50})
    estilingue.anexa(bird.corpo)
    estado="inicio"
  }
}

async function escolheFundo(){
  var resposta = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo")
  var respostaJson=await resposta.json()
  console.log(respostaJson)
  var hora=respostaJson.datetime.slice(11,13)

  if (hora>=6 && hora<=19) {
    fundoPadrao="sprites/bg.png"
    cor="black"
  } else {
    fundoPadrao="sprites/bg2.jpg"
    cor="white"
  }
  fundo=loadImage(fundoPadrao)
}