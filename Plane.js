class Plane{
    constructor(x,y){
        var options={
            isStatic: true
               };
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = this.height;
    World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
    }   
}