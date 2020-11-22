class BOB {
      
  constructor(x, y,width,height,angle) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':0.3,
          //'isStatic':true
      }
     
      this.x = x;
      this.y = y;
     
      this.body = Bodies.circle(x,y,width,height,options);
     this.width = width;
     this.height = height;
Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
     
     push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(0,0,this.width,this.height);
      pop();
    }
}