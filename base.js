class Base {
  constructor(x, y, largura, altura, opcoes) {
    this.corpo = Bodies.rectangle(x, y, largura, altura, opcoes);
    this.largura = largura;
    this.altura = altura;

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
