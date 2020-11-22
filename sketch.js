
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball,ballobject2,ballobject3,ballobject4,ballobject5
var rope1
var ball1
var ball,balle,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,
//function preload()
//{
	
//}

 function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new ground1(300,200,600,30)

ball1 = new BOB(300,400,50,50);
ball = new Box (400,400,70,70)


rope1 = new Rope(ball1.body,{x:500,y:50});

Engine.run(engine);
  
}


function draw() {
	background('white')
	rectMode(CENTER);
  background('white');
  ball1.display();
 
  
  rope1.display();
 
  ground.display();

 drawSprites();
 
}


function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mousex,y:mousey})







}
  
  
  



