function setup() {
  createCanvas(windowWidth, windowHeight);  //Füllt das gesamte Fenster
  console.log(`Canvas size is ${width}x${height}`);   //Consolen Log
  background(0, 0, 153);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  //Canvasgröße neu berechnen, wenn sich das Fenster ändert
}

// Called once per frame
function draw() {

  // Paint a black background (will completely erase the canvas)
  background(0, 0, 153);
  noFill();

  // Two white dots
  stroke('white');
  strokeWeight(10); //Thick Stroke-Weight
  point(width * 0.5, height * 0.5);
  point(width * 0.5, height * 0.25);
  strokeWeight(1); //Back to default Stroke-Weight


  //Draw the blue cross
  line(0, 0, width, height);
  stroke('#0099FF');
  line(0, height, width, 0);
  stroke('#0099FF');

  // An orange rectangle
  stroke(255, 153, 0);
  rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);    //X-,Y-Coordinates on top left corner of rectangel
  ellipse(width * 0.5, height * 0.5, width * 0.5, height * 0.8);  //X-,Y-Coordinates in center of ellipse
}