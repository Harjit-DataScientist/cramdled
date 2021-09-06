const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var box1,box2
function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(300,390,600,20);
  right = new Ground(590,200,20,400);
  left = new Ground(10,200,20,400);
  box1=new Ground(450,370,10,50);
  box2= new Ground(570,370,10,50);
  top_wall = new Ground(200,10,400,20);
  ball=Bodies.circle(200,200,50,50)
World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  button1=createImg("up.png");
button1.position(20,20);
button1.size(50,50);
button1.mouseClicked(vforce);

button2=createImg("right.png");
button2.position(250,20);
button2.size(50,50);
button2.mouseClicked(hforce);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  box1.show();
  box2.show();
  ellipse(ball.position.x,ball.position.y,25,25)
  Engine.update(engine);
}

function vforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  
  }