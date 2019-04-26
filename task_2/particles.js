function Particle(color) {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 1;
    this.weight = floor(random(5));
  
    this.red = color[0];
    this.green = color[1];
    this.blue = color[2];
  
    this.update = function() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxspeed);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
    
  
    //Check if Particle is near the Mouse-Position
    this.checkPos = function() {
      if (this.pos.x >= (mouseX - 20) && this.pos.x <= (mouseX + 20) && this.pos.y >= (mouseY - 20) && this.pos.y <= (mouseY + 20)) {
        this.pos.x = random(width);
        this.pos.y = random(height);
      }
    }

    this.follow = function(vectors) {
      var x = floor(this.pos.x / scl)
      var y = floor(this.pos.y / scl)
      var index = x + y * cols;
      var force = vectors[index];
      this.acc.add(force);
    }
  
    this.show = function() {
      stroke(this.red, this.green, this.blue, 255);
      strokeWeight(this.weight);
      this.pos.x -= random(1); //Simulating soft wind from the right
      point(this.pos.x, this.pos.y);
  
    }
  
    this.edges = function() {
      if (this.pos.x > width) {
        this.pos.x = 0;
      }
      if (this.pos.x < 0) {
        this.pos.x = width;
      }
      if (this.pos.y > height) {
        this.pos.y = 0;
        this.pos.x = random(width);
      }
      if (this.pos.y < 0) {
        this.pos.y = height;
      }
    }
  }