class Sling{
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.8,
    length:10
    }
    this.pointB=pointB
    this.Rope=Constraint.create(options)
    World.add(world,this.Rope)
    }
    display(){
    push()
    stroke("white")
    if(this.Rope.bodyA){
    line(this.Rope.bodyA.position.x,this.Rope.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
    pop()
    }
    fly(){
        this.Rope.bodyA=null
      }
      attach(body){
        this.Rope.bodyA=body
      }
    }