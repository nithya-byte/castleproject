class traingle {
    constructor(x,y,sides,radius) {
     
      this.body = Matter.Bodies.polygon(x, y, sides,radius);
     
      this.width = width;
      this.height = height;
      
      Matter.World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      fill("red");
      triangle(pos.x,pos.y,pos.x+160,pos.y,pos.x+80,pos.y-150);
     
    }
  };
  