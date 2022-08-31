let t = 0; // time variable

function setup() {
  createCanvas(1200, 200);
  noStroke();
  fill(155, 100, 180);
}

function draw() {
  background(10, 20); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, -15, width, 1 * PI, 15 * PI, true);
      const yAngle = map(mouseY, -15, height, 1 * PI, 15 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x * cos(2 * PI * t + angle);
      const myY = y * sin(2 * PI * t + angle);

      ellipse(myX, myY, 5); // draw particle
    }
  }

  t = t + 0.02; // update time
}
