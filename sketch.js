var box1,tr1;
var engine,object,world;

function setup() {
  createCanvas(800,400);
  engine=Matter.Engine.create();
  world= engine.world;

  
  box1= new box(300,350,200,200);
  box2=new box(420,350,80,200);
  box3=new box(180,350,80,200);
  circle1=new circle(180,210,80);
  circle2=new circle(420,210,80);
 tr1=new traingle(220,250,3,0);
}

function draw() {
  background("black");  
  box1.display();
  box2.display();
  box3.display();
tr1.display();
circle1.display();
circle2.display();
    drawSprites();
}