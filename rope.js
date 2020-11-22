class Rope{
    constructor(bodyA,pointB){
        
       // this.offsetY = offsetY;
        //this.offsetX = offsetX;
        
        var options = {
            bodyA: bodyA,
            pointB: pointB,
           
            stiffness: 1,
            length:250
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
attach(body){
    this.rope.body=body
}
fly(){
    this.rope.body=null;
}
        display(){
           if(this.rope.bodyA){

           
           
           
           
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB.position;
            strokeWeight(4);
           // stroke(165,42,42);
           fill(165,42,42);
            line(pointA.x, pointA.y, pointB.x,pointB.y);
        }
        }
        
    }