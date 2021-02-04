class Hammer {
    constructor(x, y) {
      var options = {
          'density':2,
          'friction':1.0,
          'restitution':0.5,
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke('red');
      fill('red');
      rect(0, 0, this.width, this.height);
      pop();
    }
  };