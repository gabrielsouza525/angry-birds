class Chao {
    constructor(x, y, largura, altura) {
      var opcoes = {
        isStatic: true
      }
  
      this.corpo = Bodies.rectangle(x, y, largura, altura, opcoes)
      this.largura = largura
      this.altura = altura
  
      World.add(world, this.corpo)
    }
  
    display() {
      var posicao = this.corpo.position
  
      rectMode(CENTER)
      fill('brown')
  
      rect(posicao.x, posicao.y, this.largura, this.altura)
    }
  }