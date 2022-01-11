class Estilingue{
  constructor(corpo,ponto){
    var opcoes ={
      bodyA: corpo,
      pointB:ponto,
      stiffness:0.04,
      length:10
    }
      
    this.restricao=Constraint.create(opcoes)
    this.estilingue1 = loadImage("sprites/sling1.png");
    this.estilingue2 = loadImage("sprites/sling2.png");
    this.estilingue3 = loadImage("sprites/sling3.png");

    World.add(world,this.restricao)
  }

  display(){
    image(this.estilingue1, 200, 23);
    image(this.estilingue2, 170, 23); 

    if(this.restricao.bodyA){
      var pontoA=this.restricao.bodyA.position
      var pontoB=this.restricao.pointB

      push()
      stroke(48,22,8)
      if (pontoA.x<240 && pontoA.x>160) {
        strokeWeight(7)     
      } else {
        strokeWeight(3)     
      }
      
      line(pontoA.x-20,pontoA.y,pontoB.x-10,pontoB.y)
      line(pontoA.x-20,pontoA.y,pontoB.x+30,pontoB.y-3)
      image(this.estilingue3, pontoA.x-30, pontoA.y-10,15,30)

      pop()
    }  
  }

  lanca(){
    this.restricao.bodyA=null
  }

  anexa(corpo){
    this.restricao.bodyA=corpo
  }
}