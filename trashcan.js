class trashcan{

    constructor(x,y){
       this.x = x;
       this.y = y;
       this.trashcanWidth = 200;
       this.trashcanHeight = 100;
       this.wallThickness = 20;
       this.angle = 0;
       this.bottomBody = Bodies.rectangle(this.x,this.y,this.trashcanWidth,this.wallThickness,{isStatic:true})
       this.leftBody = Bodies.rectangle(this.x-this.trashcanWidth/2,this.y-this.trashcanHeight/2,this.wallThickness,this.trashcanHeight,{isStatic:true})
       Matter.Body.setAngle(this.leftBody,this.angle)
       this.rightBody = Bodies.rectangle(this.x+this.trashcanWidth/2,this.y-this.trashcanHeight/2,this.wallThickness,this.trashcanHeight,{isStatic:true})
       Matter.Body.setAngle(this.rightBody,-1*this.angle)
       World.add(world,this.bottomBody)
       World.add(world,this.leftBody)
       World.add(world,this.rightBody)
    }

display(){
    var posbottom =this.bottomBody.position;
    var posleft =this.leftBody.position;
    var posright =this.rightBody.position;
    //var angle = this.body.angle;
    push();
    translate(posbottom.x, posbottom.y);
    rectMode(CENTER);
    stroke(255)
    angleMode(RADIANS)
    fill("brown");
    rect(0, 0, this.trashcanWidth, this.wallThickness);
    pop();


    push();
    translate(posleft.x, posleft.y);
    rectMode(CENTER);
    stroke(255)
    angleMode(RADIANS)
    fill("brown");
    rotate(this.angle)
    rect(0, 0, this.wallThickness, this.trashcanHeight);
    pop();


   push();
    translate(posright.x, posright.y);
    rectMode(CENTER);
    stroke(255)
    angleMode(RADIANS)
    fill("brown");
    rotate(1*this.angle)
    rect(0, 0, this.wallThickness, this.trashcanHeight);
    pop();
}
}