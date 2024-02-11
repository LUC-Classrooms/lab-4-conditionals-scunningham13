function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill (50, 85, 20);

  }
  else { 
    // otherwise do this:
    fill (110, 60, 80);
  }
  ellipse(width/2, height/2, 100, 100);
}
