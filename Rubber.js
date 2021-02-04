class Rubber {
    constructor(x, y) {
      var options = {
          'isStatic' : false,
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.ellipse(x, y, width, height, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke('red');
      fill('red');
      ellipse(x, y, this.width, this.height);
      pop();
    }
  }