class Chao {
  constructor(x, y, largura, altura) {
    var opcoes = {
      isStatic: true
    }

    this.corpo = Bodies.rectangle(x, y, largura, altura, opcoes)
    this.largura = largura
    this.altura = altura
    this.imagem=loadImage("sprites/base.png")
    World.add(world, this.corpo)
  }

  display() {
    var posicao = this.corpo.position
    
    push()
    imageMode(CENTER)
    image(this.imagem, posicao.x, posicao.y, this.largura, this.altura)
    pop()
  }
}