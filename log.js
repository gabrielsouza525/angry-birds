class Log extends Base {
  constructor(x, y, altura, angulo) {
    var opcoes = {
      density: 1.0,
      friction: 1.5,
      restitution: 0.8,
    };

    super(x, y, 20, altura,opcoes);

    Matter.Body.setAngle(this.corpo, angulo);
    this.imagem = loadImage("sprites/wood2.png");
  }
}
