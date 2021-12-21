class Pig extends Base {
    constructor(x, y) {
      super(x, y, 50, 50);
  
      this.imagem = loadImage("sprites/enemy.png");
      this.visibilidade=255
    }

    display(){
      console.log(this.corpo.speed)
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
  }
  