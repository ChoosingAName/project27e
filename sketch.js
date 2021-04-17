
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var pendulum1
var pendulum2
var pendulum3
var pendulum4
var pendulum5
var roofthe1
var string1, string2, string3, string4, string5
var engine, world

function preload()
{
	
}

function setup() {
  engine = Engine.create();
	world = engine.world;
	createCanvas(800, 800);

  pendulum1 = new pendulum(325,570,25,10)
	pendulum2 = new pendulum(375,570,25,10)
	pendulum3 = new pendulum(425,570,25,10)
  pendulum4 = new pendulum(475,570,25,10)
  pendulum5 = new pendulum(525,570,25,10)
	roofthe1 = new roof(424,300,212,10)
	string1 = new string(pendulum1.body,roofthe1.body,-100,0)
	string2 = new string(pendulum2.body,roofthe1.body,-50,0)
	string3 = new string(pendulum3.body,roofthe1.body,0,0)
	string4 = new string(pendulum4.body,roofthe1.body,50,0)
  string5 = new string(pendulum5.body,roofthe1.body,100,0)
	//Create the Bodies Here.


  
}


function draw() {
  Engine.run(engine)
  rectMode(CENTER);
  background("white");
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  roofthe1.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum5.body, {x: mouseX , y: mouseY});
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(pendulum1.body,pendulum1.body.position,{x:-25,y:-20})
  }
}