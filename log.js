class Log extends Base {
  constructor(x, y, altura, angulo) {
    super(x, y, 20, altura, angulo);

    Matter.Body.setAngle(this.corpo, angulo);
    this.imagem = loadImage("sprites/wood2.png");
  }
}
