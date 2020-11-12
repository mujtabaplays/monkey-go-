
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var monkey
var ground
var survivalTime=0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  sprite0image = loadImage("sprite_0.png");
  sprite1image = loadImage("sprite_1.png");
  sprite2image = loadImage("sprite_2.png");
  sprite3image = loadImage("sprite_3.png");
  sprite4image = loadImage("sprite_4.png"); 
  sprite5image = loadImage("sprite_5.png");
  sprite6image = loadImage("sprite_6.png");
  sprite7image = loadImage("sprite_7.png");
  sprite8image = loadImage("sprite_8.png");
  
}



function setup() {
createCanvas(600,600);  
monkey=createSprite(80,315,20,20);  
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1; 
  
ground=createSprite(400,350,900,10);
ground.velocitY=-4;
ground.x=ground.width/2;
 console.log(ground.x) 
  
bananaGroup = new Group();  
obstacleGroup = new Group();  
  
}


function draw() {
background(350);
  

if(keyDown("space")){
monkey.velocityY=-3;    
}  
monkey.velocityY=monkey.velocityY+0.4  
  
if(ground.x > 400){
      ground.x = 900
    }
  
 monkey.collide(ground);
 monkey.velocitY=-4; 
  
  
  
stroke("white");
textSize(20);
fill("white");
text("score: "+score,500,50);
  
  
  
  stroke("black"); 
textSize(20);  
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())  
text("survival Time: "+survivalTime,100,50);
  
  
drawSprites();  
}

function food(){
banana=createSprite();
banana=frameCount(80);  
banana.Math.round(random(80 === 0));
banana.addImage(bananaImage)
banana.velocityX=-4;
banana.lifeTime=70;  

bananaGroup.addGroup(banana);  
}

function obstacles(){
obstacle=createSprite();
obstacle.Math.round(random(300 === 0));
obstacle.addImage(obstacleImage);
obstacle.velocityX=-4;
obstacle.lifeTime=80;
  
  
obstacleGroup.addGroup(obstacle);  


}

