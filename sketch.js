var car,wall;
var speed,weight;

/*function preload(){
  carImage = loadImage(white.png);
  carImage1 = loadImage(red.png);
  carImage2 = loadImage(green.png);
  carImage3 = loadImage(yellow.png);
}*/

function setup() {
  createCanvas(1700,400);
  speed=random(50,90);
  weight=random(400,1500);
   wall = createSprite(1500,200,50,height/2);
   wall.shapeColor = "white";
  
     car = createSprite(50, 200, 50, 50);
   //car.addImage("white",carImage);
   car.shapeColor = "white";
  
}

function draw() {
   background("black");  
 car.velocityX = speed;
   
  
   
   if (wall.x - car.x < (car.width + wall.width)/2){
     car.velocityX = 0;
     var deformation = 0.5*weight*speed*speed/22500;
     if (deformation > 180){
       car.shapeColor = "red";
     }
     
     if (deformation < 180 && deformation >180){
       car.shapeColor = "yellow";
     }
     
     if(deformation < 100){
       car.shapeColor = "green";
     }
   }
  
  drawSprites();
}