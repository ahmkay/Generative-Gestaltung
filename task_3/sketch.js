var font;
var particles = [];
let xoff = 0;
let xincrement = 0.03;

function preload() {
  font = loadFont("Roboto.ttf");
}

function setup() {
  createCanvas(800, 300);

  var points = font.textToPoints("Hola", 0, 230, 220);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var particle = new Particle(pt.x, pt.y);
    particles.push(particle);
  }

}

function draw() {
  background(60);

  //Wind
  let n = noise(xoff);
  let x = map(n, 0, 1, -0.3, 0.3);
  xoff += xincrement;

  for (var i = 0; i < particles.length; i++) {
    let m = particles[i].mass;
    let wind = createVector(x * m, 0);
    if (mouseIsPressed) {
      particles[i].friction();
      particles[i].gravity();
    } else {
      particles[i].place();
    }
    particles[i].applyForce(wind);
    particles[i].update();
    particles[i].display();
    particles[i].checkEdges();
  }
}


function changeText(){
  var text = document.getElementById("text_value").value;
   points = font.textToPoints(text, 0, 230, 220);
  for (var i = 0; i < points.length; i++) {
      var pt = points[i];
      if (particles[i]) {
        particles[i].target = createVector(pt.x, pt.y);
      } else { //Falls nicht genug Partikel, erstelle neue
        var particle = new Particle(pt.x, pt.y);
        particles.push(particle);
      }
    if (points.length < particles.length) {
        for (var j = particles.length-1; j >= points.length; j--) {
          particles.splice(j, 1);
        }
    }
}
}