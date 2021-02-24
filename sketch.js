var garima, shree;

function setup() {
  createCanvas(800,400);

  garima=createSprite(400, 200, 80,60);
  shree=createSprite(400,400,70,100)

  garima.shapeColor="violet";
  shree.shapeColor="teal";

  shree.debug=true;
  garima.debug=true;
}

function draw() {
  background("cyan");

  shree.x=mouseX;
  shree.y=mouseY;

  Touch();
  
  drawSprites();
}
function Touch(){
  if(shree.x-garima.x<shree.width/2+garima.width/2 &&
    garima.x-shree.x<shree.width/2+garima.width/2 &&
    shree.y-garima.y<shree.height/2+garima.height/2 &&
    garima.y-shree.y<shree.height/2+garima.height/2){
    shree.shapeColor="red";
    garima.shapeColor="red";
  }
  else{
    garima.shapeColor="violet";
    shree.shapeColor="teal";
  }
}