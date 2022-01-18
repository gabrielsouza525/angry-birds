class Box extends Base {
  constructor(x, y, largura, altura) {
    var opcoes = {
      density: 1.0,
      friction: 1.5,
      restitution: 0.8,
    };

    super(x, y, largura, altura,opcoes);

    this.imagem = loadImage("sprites/wood1.png");
  }
}
