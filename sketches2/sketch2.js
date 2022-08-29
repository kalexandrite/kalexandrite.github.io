let t = 0; // time variable

function setup() {
  createCanvas(400, 1800);
  noStroke();
  fill(195, 90, 200);
}

function draw() {
  background(30, 20); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 3; x <= width; x = x + 80) {
    for (let y = -2; y <= height; y = y + 80) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, -15, width, 1 * PI, 45 * PI, true);
      const yAngle = map(mouseY, -15, height, 1 * PI, 95 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x * cos(2 * PI * t + angle);
      const myY = y * sin(2 * PI * t + angle);

      ellipse(myX, myY, 30); // draw particle
    }
  }

  t = t + 0.002; // update time
}
