class circle {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':2.0,
          'density':1.0
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      
      this.width = width;
      this.height = height;
      this.radius=radius;
      Matter.World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      ellipseMode(CENTER);
      fill("green");
      ellipse(pos.x, pos.y, this.radius);
      
    }
  };
  