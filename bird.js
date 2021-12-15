class Bird extends Base {
    constructor(x, y) {
      super(x, y, 50, 50);
  
      this.imagem = loadImage("sprites/bird.png");
    }

    display() {
        super.display()
       // this.corpo.position.x=mouseX
        //this.corpo.position.y=mouseY

    }
  }
  