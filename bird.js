class Bird extends Base {
  constructor(x, y) {
    var opcoes = {
      density: 1.5,
      friction: 1.0,
      restitution: 0.5,
    };

    super(x, y, 50, 50,opcoes);

    this.imagem = loadImage("sprites/bird.png");
    this.fumaca = loadImage("sprites/smoke.png");
    this.trajetoria=[]
  }

  display() {
    super.display()

    if (this.corpo.velocity.x>10 && this.corpo.position.x>200 && estado==="jogar") {
      var posicao=[this.corpo.position.x,this.corpo.position.y]
      this.trajetoria.push(posicao)
    }
    
    for (var index = 0; index < this.trajetoria.length; index++) {
      image(this.fumaca,this.trajetoria[index][0],this.trajetoria[index][1]) 
    }
  }
}
  