//Setup of variables
let x;
let y;
let speedX;
let speedY;
//setup colour of line object so that the colour change is random when mouse pressed
let r = 255;
let g = 255;
let b = 255;
//variable of t to control how fast the middle object moves
var t;


function setup() {
  //size of the canvas
  createCanvas(594, 841);
  //set to a random colour so that everytime page is refreshed a different random colour appears
  fill(random(255), random(255), random(255));

  stroke(0, 20);//stroke to set colours used to draw lines

  stroke(255); //line of mouse movement
  stroke(500);     // Set line drawing color to white
  frameRate(200);  //set speed of movement

t = 0;
}

function draw() {
//This is the code for the object that moves with the mouse and is a new colour every time the image is refreshed
  for (var i = 0; i < 800; i += 20) {
  bezier(mouseX-(i/2.0), 40+i, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0));
}
  //use the function 'noise' instead of random to get a more structured sequence

  //Following bit could be an array and use a for loop

  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  //use the function 'bezier' to make the sequence curve in a flowing movement
  bezier(x1-100, y1-200, x2-100, y2+100, x3-100, y3+100, x4-100, y4+300);

  //When mouse is pressed, change randomly the RGB variables
    if (mouseIsPressed) {
      r = random(255);
      g = random(255);
      b = random(255);
    }
  //t = 0.005 which makes the sequence move slowly
    t += 0.005;
    //colour of the bezier so it changes colour everytime mouse is pressed
    fill(r, g, b);

bezier(x1, y1, x2, y2, x3, y3, x4, y4);
bezier(x1+100, y1+100, x2+100, y2+100, x3+100, y3+100, x4+100, y4+100);
fill(199, 0, 57);
bezier(x1-100, y1-100, x2-100, y2-100, x3-100, y3-100, x4-100, y4-100);
fill(255, 72, 12);
bezier(x1+200, y1+200, x2+200, y2+200, x3+200, y3+200, x4+200, y4+200);
fill(r, g, b);
bezier(x1-100, y1+10, x2-100, y2+10, x3-300, y3+10, x4-100, y4+90);
fill(255, 152, 119);
bezier(x1-100, y1-200, x2-100, y2-200, x3-300, y3+10, x4-100, y4+90);
fill(255, 62, 0);
bezier(x1-100, y1-200, x2-100, y2-200, x3-100, y3+10, x4-300, y4-300);
fill(255, 117, 0);
bezier(x1-100, y1-200, x2-100, y2+100, x3-100, y3+100, x4-100, y4+500);
fill(r, g, b)
bezier(x1-100, y1+500, x2-100, y2+100, x3-100, y3+100, x4-100, y4+500);



//function and movement of the star object
fill(255)
  push();
translate(width*0.8, height*0.5);
rotate(frameCount / -100.0);
star(0, 0, 500, 100, 5);
pop();

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


}
