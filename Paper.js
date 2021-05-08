class Paper {
    constructor(20,20,30,30){
        var options = {isStatic:true};
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body); 
    }
    display(){
        rectMode(CENTER);
    }
}
