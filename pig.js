class Pig extends Base {
  constructor(x, y) {
    super(x, y, 50, 50);

    this.imagem = loadImage("sprites/enemy.png");
    this.visibilidade=255
  }

  display(){
    if (this.corpo.speed<3) {
      super.display()
    } else {
      World.remove(world,this.corpo)
      push()
      this.visibilidade=this.visibilidade-5
      tint(255,this.visibilidade)
      image(this.imagem,this.corpo.position.x,this.corpo.position.y,50,50)
      pop()
    } 
  }
    
  placar(){
    if (this.visibilidade<0 && this.visibilidade>-500) {
      pontuacao=pontuacao+1
    }
  }
}
  