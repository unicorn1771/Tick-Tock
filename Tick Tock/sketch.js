var hr,minutes,seconds;
var hrangle,minuteangle,secondsangle;
function setup() {
  createCanvas(800,400);
//to convert the angle into degrees
angleMode(DEGREES);
}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-90);
  hr = hour();
  minutes = minute();
  seconds = second();
  secondsangle = map(seconds,0,60,0,360);
  minuteangle = map(minutes,0,60,0,360);
  hrangle = map(hr%12,0,12,0,360); 
//drawing seconds hand
push();
rotate(secondsangle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
//drawing minute hand
push();
rotate(minuteangle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
pop();
//drawing hour hand
push();
rotate(hrangle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop();
stroke(255,0,255);
point(0,0);
strokeWeight(5);
noFill();
//seconds
stroke(255,0,0);

arc(0,0,300,300,0,secondsangle);
//minutes
stroke(0,255,0);

arc(0,0,280,280,0,minuteangle);
//hour
stroke(0,0,255);
arc(0,0,260,260,0,hrangle);
  drawSprites();
}