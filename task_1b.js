let increment = 0.004;

function setup() {
  //createCanvas(windowWidth, windowHeight);  //Füllt das gesamte Fenster
  createCanvas(900, 700);  //Füllt das gesamte Fenster
  background(220,220,220);

  noiseDetail(5, 0.6);

  /*
  createNoise(127,201,60, 0, 0);
  createNoise(209,15,39, 40000, 40000);
  createNoise(15,104,214, 10000, 10000);
  createNoise(255,135,25, 20000, 20000);
  */

 createNoise(255,255,255, 0, 0);
 createNoise(30,255,30, 40000, 40000);
 createNoise(30,30,255, 10000, 10000);
 createNoise(255,30,30, 20000, 20000);
}



function createNoise(r, g, b, Yoff, Xoff) {
  //Funktion um Noise-Muster einmal zu erzeugen
  var yoff = Yoff;
  for (let y = 0; y < height; y++) {
    var xoff = Xoff;
    for (let x = 0; x < width; x++) {
      bright = noise(xoff, yoff) * 155;
      stroke(r,g,b,bright);
      point(x, y);
      xoff += increment;
    }
    yoff += increment;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  //Canvasgröße neu berechnen, wenn sich das Fenster ändert
}

// No draw() function for this task, because rendering takes some time and should only be done once
/* function draw() {
} */