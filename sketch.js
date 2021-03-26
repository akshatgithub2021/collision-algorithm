var fixed,moving;
function setup() {
  createCanvas(800,400);
  moving=createSprite(300,100,50,100);
  moving.shapeColor="green";
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="green";
}

function draw() {
  background("black");
moving.x=World.mouseX;
moving.y=World.mouseY;
if(moving.x-fixed.x<fixed.width/2+moving.width/2&&
  fixed.x-moving.x<fixed.width/2+moving.width/2&&
  moving.y-fixed.y<fixed.height/2+moving.height/2&&
  fixed.y-moving.y<fixed.height/2+moving.height/2){
moving.shapeColor="red";
fixed.shapeColor="red";

}
else{
  moving.shapeColor="green";
  fixed.shapeColor="green";

}
  drawSprites();
}