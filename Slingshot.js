class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,25)
        image(this.sling2,170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ()
            stroke('#301608');
            if(pointA.x<180){
        
            strokeWeight(7);
            line(pointA.x-15, pointA.y, pointB.x, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x+45, pointB.y-5)
            image(this.sling3,pointA.x-25,pointA.y-10,10,30)}
            else if(pointA.x>190&&pointA.x<240){
                strokeWeight(5);
                line(pointA.x-15, pointA.y, pointB.x, pointB.y);
                line(pointA.x-15, pointA.y, pointB.x+45, pointB.y-5)
                image(this.sling3,pointA.x-25,pointA.y-10,10,30)
            }
            else{ strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+45, pointB.y-5)
                image(this.sling3,pointA.x+25,pointA.y-10,10,30)}
            pop ();
        }
    }
    
}