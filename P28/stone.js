class Stone{
constructor(x,y,r){
var options={
    restitution:0,
    isStatic:false,
    friction:1,
    density:1.2
}
this.body=Bodies.circle(x,y,r,options)
this.r=r

World.add(world,this.body)
this.image=loadImage("stone.png")
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