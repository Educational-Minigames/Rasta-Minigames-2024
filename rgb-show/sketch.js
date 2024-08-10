let img;
let d;
let slider;
let cos30, sin30;
function preload() {
  img = loadImage('image.jpg');
}
let redChannel, blueChannel, greenChannel;
let c = 0;

function setup() {
  cos30 = Math.cos(PI / 6);
  sin30 = Math.sin(PI / 6);
  d = 0;
  slider = createSlider(0, 1, 0, step=0.01);
  slider
  createCanvas(img.width * 3, img.height);
  // Display original image

  // Red channel
  redChannel = createImage(img.width, img.height);
  redChannel.loadPixels();
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    redChannel.pixels[i] = img.pixels[i];     // Red
    redChannel.pixels[i + 1] = 0;             // Green
    redChannel.pixels[i + 2] = 0;             // Blue
    redChannel.pixels[i + 3] = img.pixels[i + 3]; // Alpha
  }
  redChannel.updatePixels();

  // Green channel
  greenChannel = createImage(img.width, img.height);
  greenChannel.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    greenChannel.pixels[i] = 0;               // Red
    greenChannel.pixels[i + 1] = img.pixels[i + 1]; // Green
    greenChannel.pixels[i + 2] = 0;           // Blue
    greenChannel.pixels[i + 3] = img.pixels[i + 3]; // Alpha
  }
  greenChannel.updatePixels();

  // Blue channel
  blueChannel = createImage(img.width, img.height);
  blueChannel.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    blueChannel.pixels[i] = 0;               // Red
    blueChannel.pixels[i + 1] = 0;           // Green
    blueChannel.pixels[i + 2] = img.pixels[i + 2]; // Blue
    blueChannel.pixels[i + 3] = img.pixels[i + 3]; // Alpha
  }
  blueChannel.updatePixels();
  imageMode(CENTER);
}

function draw() {
  translate(width/2, height/2);
  blendMode(BLEND);
  background(0);
  blendMode(ADD);
  d =(1 - Math.cos(c))/2;
  image(redChannel, d * img.width, 0);
  image(greenChannel, 0, 0);
  image(blueChannel, -d * img.width, 0);
  c += 0.01;
}



// function setup() {
//   createCanvas(500, 500);
//   background(0);

//   // Set the blend mode.
//   blendMode(ADD);

//   // Draw the red circle
//   fill(255, 0, 0);
//   ellipse(width / 2 - 50, height / 2, 150, 150);

//   // Draw the green circle
//   fill(0, 255, 0);
//   ellipse(width / 2 + 50, height / 2, 150, 150);

//   // Draw the blue circle
//   fill(0, 0, 255);
//   ellipse(width / 2, height / 2 + 50, 150, 150);
// }