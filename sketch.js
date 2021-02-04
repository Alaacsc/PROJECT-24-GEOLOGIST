
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var stone1;
var rubber,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background(255);

	engine = Engine.create();
	world = engine.world;

    ground = new Plane(600,height,1200,20)	

    stone1 = new Stone(700,320,70,70);
	hammer1 = new Hammer(700,400);
	rubber = new Rubber(700,320,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ground.display();
  hammer1.display();
  stone1.display();
  rubber.display();
 
}