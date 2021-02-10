
class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,restitution:0.3,friction:0.3,density:0.1

        } 
        this.x=x
        this.y=y
        this.radius=radius
        this.body=Bodies.circle(x,y,radius/2,options)
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        //strokeWeight(5)
        //fill("blue")
        //ellipse(0,0,this.radius,this.radius)
        image(this.image,0,0,this.radius,this.radius)
        pop()
    }
}
