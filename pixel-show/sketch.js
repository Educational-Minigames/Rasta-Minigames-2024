let img;
let cellSize = 30; // Size of each grid cell

let p;
let barDragged;

function preload() {
  // Load an image (replace 'image.jpg' with your image file)
  img = loadImage('0000.jpg');
  img.loadPixels();
}

function setup() {
  createCanvas(img.width * cellSize, img.height * cellSize);
  barDragged = false;
  p = int(0.5 * img.width);
  // img.resize(40, 40); // Resize the image to a manageable size
  // noLoop(); // Draw only once, as the image doesn't change
}

function draw() {
  if (barDragged) {
    p = int(min(max(mouseX / width * img.width, 0), img.width));
  }
  // Draw the grid and RGB values
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let c = img.get(x, y); // Get the color of the pixel at (x, y)
      let r = red(c);
      let g = green(c);
      let b = blue(c);
      
      // Draw a rectangle for each cell
      fill(255);
      // stroke(0);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      
      // Display the RGB values
      fill(0);
      textSize(12);
      textAlign(CENTER, CENTER);
      text(r, x * cellSize + cellSize / 2, y * cellSize + cellSize / 4);
      text(g, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
      text(b, x * cellSize + cellSize / 2, y * cellSize + 3 * cellSize / 4);
      fill(255);
    }
  }

  if (p > 0) {
    cropped_image = crop(img, p);
    if (cropped_image.width != 0) {
      // image(cropped_image, 0, 0, width * p / img.width, height);
      showPixeledImage(cropped_image, 0, 0, width * p / img.width, height);
    }
  }

  // draw bar
  fill(255, 0, 0);
  rect(width * (p / img.width-0.005),0, width * 0.01, height, 20);
}
function showPixeledImage(img, x, y, w, h) {
  translate(x, y);
  let x_ = w / img.width;
  let y_ = h / img.height;
  for (let i=0; i < img.height; i++) {
    for (let j=0; j < img.width; j++) {
      fill(img.get(j, i));
      rect(j * x_, i * y_, x_, y_);
    }
  }
  translate(-x, -y);
}

function crop(img, p) {
  // Calculate the width of the cropped image
  let croppedWidth = p;  
  let croppedHeight = img.height;
  // Create a new graphics buffer to store the cropped image
  let croppedImage = createGraphics(croppedWidth, croppedHeight);
  
  // Copy the desired portion of the original image to the new image
  croppedImage.copy(img, 0, 0, croppedWidth, croppedHeight, 0, 0, croppedWidth, croppedHeight);
  
  // Return the cropped image
  return croppedImage;
}

function mousePressed() {
  if (Math.abs(mouseX / width - p / img.width) < 0.05) {
    barDragged = true;
  }
}

function mouseReleased() {
  barDragged = false;
}
