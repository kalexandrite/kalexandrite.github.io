let dim;

function setup() {
  createCanvas(1600, 100);
  dim = width / 16;
  background(0);
  colorMode(HSB, 360, 50, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(.2);
}

function draw() {
  background(0);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 4);
  }
}

function drawGradient(x, y) {
  let radius = dim /1;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}
