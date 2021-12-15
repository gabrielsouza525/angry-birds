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
        image(this.estilingue1, 200, 20);
        image(this.estilingue2, 170, 20);
        if(this.restricao.bodyA){
            var pontoA=this.restricao.bodyA.position
            var pontoB=this.restricao.pointB
            strokeWeight(4)
            stroke(48,22,8)
            line(pontoA.x-20,pontoA.y,pontoB.x-10,pontoB.y)
        }
        
    }

    lanca(){
        this.restricao.bodyA=null
    }
}