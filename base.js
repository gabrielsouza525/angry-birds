class Base {
  constructor(x, y, largura, altura, angulo) {
    var opcoes = {
      density: 1.0,
      friction: 1.0,
      restitution: 0.8,
    };

    this.corpo = Bodies.rectangle(x, y, largura, altura, opcoes);
    this.largura = largura;
    this.altura = altura;
    this.imagem = loadImage("sprites/base.png");

    World.add(world, this.corpo);
  }

  display() {
    var posicao = this.corpo.position;
    var angulo = this.corpo.angle;

    push();
    translate(posicao.x, posicao.y);
    rotate(angulo);
    imageMode(CENTER);
    image(this.imagem, 0, 0, this.largura, this.altura);
    pop();
  }
}
