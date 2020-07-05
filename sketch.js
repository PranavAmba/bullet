var bullet,wall,thickness;
var speed,weight

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,400);

  wall.shapeColor=(80,80,80);

  thickness=random(22,83)

  bullet.velocityX=speed;

  console.log(speed);
  console.log(weight);
  console.log(thickness);
  
}

function draw() {
  background(255,255,255); 
  stopWhenCollided(bullet,wall); 
  excitute();
  drawSprites();
}
function stopWhenCollided(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX =0;
 
}
console.log(object1.x,object2.x)
}
function excitute(){
if(weight=>32||speed>=223||thickness<=70){
  wall.shapeColor="green"
}
if(weight=>32||speed>=223||thickness<=40){
  wall.shapeColor="red"
}
}