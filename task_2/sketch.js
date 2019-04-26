var increment = 0.1;
var scl = 20;
var cols, rows;

var zoff = 0;

var particles = [];
var flowfield = [];

var colorPalette = [
  [255,140,79],
  [190, 157, 154],
  [255, 220, 9],
  [196, 196, 180],
  [128, 22, 128]
];
var colorCode;


function setup() {
  createCanvas(1280, 720);
  frameRate(60); //Limit Framerate to limit animation speed

  cols = floor(width / scl);
  rows = floor(height / scl);

  noiseDetail(4, 0.6);

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 500; i++) {
    particles[i] = new Particle(chooseColor());
  }

  sun = new Sun();
  flowers_array = [];
  for (var i = 0; i < 100; i++) {
    flower = new Flower(Math.floor(random(10, width)), Math.floor(random(height / 2 + 40, height - 30)));
    flowers_array.push(flower);
  }

  strokeWeight(4);
  stroke(0);
  var line1 = line(width / 2, height, width / 2, height - 20);
}



function chooseColor() {
  return colorPalette[floor(random(4))];
}



function draw() {
  background("#b4dee6");
  var yoff = 0;

  sun.update();
  sun.display();



  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;

      /* if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
         var v1 = createVector(mouseX, mouseY);
         var v2 = createVector(x * scl, y * scl);
         var v = v1.sub(v2);  //Driving particles towards mouse position
         //v.rotate(PI);    //Driving particles away from mouse position
         v.setMag(1);
         flowfield[index] = v;        
     } else {
       var angle = noise(xoff, yoff, zoff) * PI;
       //var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
       var v = p5.Vector.fromAngle(angle);
       v.setMag(1);
       flowfield[index] = v
     } */

      var angle = noise(xoff, yoff, zoff) * PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v

      xoff += increment;

      stroke(20, 50);
      strokeWeight(1);
    }
    yoff += increment;
    zoff += 0.0005;
  }

  strokeWeight(1);
  stroke("green");
  fill("green");
  beginShape();
  curveVertex(-10, height - 0);
  curveVertex(-10, height - 0);
  curveVertex(-10, height / 1.8);
  curveVertex(width / 3, height / 1.6);
  curveVertex(width / 1.4, height / 2);
  curveVertex(width / 1.1, height / 1.7);
  curveVertex(width, height / 1.4);
  curveVertex(width + 10, height);
  curveVertex(width, height);
  endShape();


  strokeWeight(1);
  stroke("green");
  fill("#cddc39");
  beginShape();
  curveVertex(-10, height - 0);
  curveVertex(-10, height - 0);
  curveVertex(-10, height / 1.55);
  curveVertex(width / 3, height / 1.9);
  curveVertex(width / 2, height / 2);
  curveVertex(width / 1.4, height / 1.7);
  curveVertex(width, height / 1.7);
  curveVertex(width + 50, height);
  curveVertex(width + 50, height);
  endShape();

  flower.display();

  for (var i = 0; i < flowers_array.length; i++) {
    flowers_array[i].display();
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
    //particles[i].checkPos();
  }



}