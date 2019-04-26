class Particle {
  constructor(x, y) {
    this.position = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
    this.maxspeed = 20;
    this.maxforce = 1;
    this.mass = random(20);
    this.mu = 0.5; //Reibunskoeffizient
    this.color = 255;
  }


  applyForce(f) {
    this.acceleration.add(f);
  }

  update() {
     this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(this.color);
    strokeWeight(this.r);
    ellipse(this.position.x, this.position.y, this.mass, this.mass);
  }

  gravity() {
    let gravity = createVector(0, 10);
    let f = p5.Vector.div(gravity, this.mass); //Divide mass from a copy of the force vector
    this.acceleration.add(f);
  }
  
  friction(){ //Reibungskraft 
      let frictionMag = this.mu * 1; //Die Größe der Reibungskraft
      let friction = this.velocity.copy(); //Rechne Reibungs zu Velocity-Vector
      friction.mult(-1); //Laut Formel *-1, da Reibung eine entgegengesetzte Kraft ist
      friction.normalize(); //Normalisieren, da Kraft nicht von der Länge des Vektors abhängt
      friction.mult(frictionMag); //Multipilizieren mit Reibungskraft
      this.applyForce(friction); //Kraft anwenden auf Objekt
  }

  

  place() {
    var desired = p5.Vector.sub(this.target, this.position);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    steer.mult(1);
    this.applyForce(steer);
  }
  
  checkEdges() {
    if (this.position.x > (width - (this.mass / 2))) {
      this.position.x = width - (this.mass / 2);
      this.velocity.x *= -1;
    } else if (this.position.x < (this.mass / 2)) {
      this.velocity.x *= -1;
      this.position.x = this.mass / 2;
    }
    if (this.position.y > (height - (this.mass / 2))) {
      this.velocity.y *= -1;
      this.position.y = height - (this.mass / 2);
    } else if (this.position.y < (this.mass / 2)) {
      this.velocity.y *= -1;
      this.position.y = this.mass / 2;
    }
  }

  
}