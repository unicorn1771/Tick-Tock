var fixedrectangle, movingrectangle;
function setup() {
createCanvas(1600,400);
fixedrectangle = createSprite(400, 200, 50, 100);
fixedrectangle.shapeColor = "green";  
movingrectangle = createSprite(1200, 200, 80, 50);
movingrectangle.shapeColor = "green";
}

function draw() {
  background(0);  
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;
  if (movingrectangle.x - fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.x - movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.y - movingrectangle.y<fixedrectangle.width/2+movingrectangle.width/2&&
    movingrectangle.y - fixedrectangle.y<fixedrectangle.width/2+movingrectangle.width/2) {
    fixedrectangle.shapeColor = "red";  
    movingrectangle.shapeColor = "red";
  } else {
    fixedrectangle.shapeColor = "green";  
    movingrectangle.shapeColor = "green";
  }
  drawSprites();
}