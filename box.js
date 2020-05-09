class box {
  constructor(x, y,width, height) {
    var options = {
        'restitution':0.8,
        'friction':2.0,
        'density':1.0
    }
    this.body = Matter.Bodies.rectangle(x, y, 20, width, height, options);
    //Matter.Body.setAngle(this.body, angle);
    this.width = width;
    this.height = height;
    
    Matter.World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
