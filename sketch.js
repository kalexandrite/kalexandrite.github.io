let t = 0; // time variable

function setup() {
  createCanvas(1800, 500);
  noStroke();
  fill(255, 19, 200);
}

function draw() {
  background(250, 30); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 7; x <= width; x = x + 60) {
    for (let y = 7; y <= height; y = y + 60) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -50 * PI, 50 * PI, true);
      const yAngle = map(mouseY, 0, height, -50 * PI, 40 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 40 * cos(6 * PI * t + angle);
      const myY = y + 40 * sin(6 * PI * t + angle);

      ellipse(myX, myY, 15); // draw particle
    }
  }

  t = t + 0.005; // update time
}
