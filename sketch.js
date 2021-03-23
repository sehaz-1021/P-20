var wall,bullet,thickness;
var speed,weight;

function setup() {
  createCanvas(1320,400);
  speed=random(83,90);
  weight=random(30,50);
  thickness = random(22,43);
  wall = createSprite(1300, 200, 30, height/2);
  wall.shapeColor="blue";
  bullet= createSprite(50,200,50,20);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
if(damage > 10){
bullet.shapeColor = color(255,0,0);
}
if(damage < 10){
  bullet.shapeColor = color(0,250,0);
}
}

  
  drawSprites();
}
