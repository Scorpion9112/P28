class Mango{
constructor(x,y,r){
    var options={
        isStatic:true,
        density:.05,
        restitution:.1
    }
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    this.r=r
    this.image=loadImage("mango.png")
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
imageMode(CENTER)
ellipseMode(RADIUS)
image(this.image,0,0,this.r,this.r)
pop()
}
}