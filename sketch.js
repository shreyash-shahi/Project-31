const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;

ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(240,795,480,15);
 
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

   if(frameCount%50===0){
     particles.push(new Particle(random(width/2-200,width/2+200), 10,10));
   }

   for(var k=0; k<divisions.length; k++){
     divisions[k].display();
   }

   for(var j=0; j<particles.length; j++){
      particles[j].display();
   }
   ground.display();
   
  drawSprites();
}