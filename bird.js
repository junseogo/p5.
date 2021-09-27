function Bird(i) {
  this.y = height / 2;
  this.x = i;

beginShape();
vertex(30, 20);
vertex(85, 20);
vertex(85, 75);
vertex(30, 75);
  
  this.gravity = 0.7;
  this.lift = -12;
  this.velocity = 0;


  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  };


  this.up = function() {
    this.velocity += this.lift;
  };


  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;


    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }


    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
      
  set(i) = color(255,100,0 )
  fill(i);
  setGreen(i)
    }
  };
}
