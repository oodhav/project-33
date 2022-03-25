class Snow {
    constructor(x, y, r) {
        var options = {
            restitution: 0.42,
            friction: 0,
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        //give color property 

       this.image = loadImage("snowImg.webp")

        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
      
       
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};