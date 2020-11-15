
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var gameState="still"
var tries
function preload()
{
	tree=loadImage("tree.png")
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);
   tries=0

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(600,690,1200,20)
	stone1= new Stone(120,600,40)
	sling1= new Sling(stone1.body,{x:90,y:580})
	mango1=new Mango(695,165,30)
	mango2=new Mango(830,240,30)
	mango3=new Mango(730,340,30)
	mango4=new Mango(950,250,30)
	mango5=new Mango(850,120,30)
	mango6=new Mango(730,300,30)
	mango7=new Mango(770,300,30)
	mango8=new Mango(630,340,30)
	mango9=new Mango(770,250,30)
	mango10=new Mango(930,200,30)
	mango11=new Mango(730,190,30)
	mango12=new Mango(615,320,30)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER)
  image(tree,800,400,500,800)
  image(boy,150,630,200,200)
  ground1.display()
 stone1.display()
 sling1.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 mango8.display()
 mango9.display()
 mango10.display()
 mango11.display()
 mango12.display()
 detect(stone1,mango1)
 detect(stone1,mango2)
 detect(stone1,mango3)
 detect(stone1,mango4)
 detect(stone1,mango5)
 detect(stone1,mango6)
 detect(stone1,mango7)
 detect(stone1,mango8)
 detect(stone1,mango9)
 detect(stone1,mango10)
 detect(stone1,mango11)
 detect(stone1,mango12)
text("Amount of Tries:"+tries,200,100)
textSize(20)
text("Press Space to Retry",400,100)
 
}
function mouseDragged(){
	if (gameState!=="launched"){
		Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
	}
	
  }
  
  
  function mouseReleased(){
	sling1.fly();
	gameState = "launched";
  }
  function keyPressed(){
	  if(keyCode===32){
		  sling1.attach(stone1.body)
		  gameState="still"
		  tries++
	  }
  }
  function detect(object1,object2){
	  var distance=dist(object1.body.position.x,object1.body.position.y,object2.body.position.x,object2.body.position.y)
		if (distance<=object1.r+object2.r){
			Body.setStatic(object2.body,false)
			console.log(object1)
		}
		
  }

