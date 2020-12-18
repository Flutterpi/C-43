var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score=0;
var gameOver, restart;



function preload()
{
    backgroundImg = loadImage("images/bg1.jpg");
    bunnyImg = loadImage("images/bunny1.png");
    pandaImg = loadImage("images/panda2.png");
    smoothieImg = loadImage("images/smoothie.png");
    cakeImg = loadImage("images/cake.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 
 bunny = createSprite(1171,482,10,10)
 bunny.addImage(bunnyImg);
 bunny.scale = 0.70;

 panda = createSprite(325,442,10,10)
 panda.addImage(pandaImg);
 panda.scale = 0.37;

 foodGroup = new Group();

 /*ground = createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x = ground.width /2;
 ground.velocityX = -(6 + 3*score/100);
 */
 
}

function draw() {
 background(backgroundImg);
 if (frameCount%60===0)
 {
     spawnFoods()
 }

 if (keyDown("LEFT_ARROW"))
 {
     var tempFood = spawnFoods();
     console.log(tempFood);
     tempFood.velocityX = -6;
 }
/*text("Score: "+ score, 500,50);
 
 if (gameState===PLAY){
 score = score + Math.round(getFrameRate()/60);
 
 
 if(keyDown("space") && trex.y >= 159) {
 jumpSound.play();
 trex.velocityY = -14;
 }
 
 trex.velocityY = trex.velocityY + 0.8
 
 if (ground.x < 0){
 ground.x = ground.width/2;
 }
 
 trex.collide(invisibleGround);
 spawnClouds();
 spawnObstacles();
 
 if (score>0 && score%100 === 0){
 checkPointSound.play();
 }
 
 if(obstaclesGroup.isTouching(trex)){
 dieSound.play(); 
 gameState = END;
 
 }
 }
 else if (gameState === END) {
 gameOver.visible = true;
 restart.visible = true;
 
 //set velcity of each game object to 0
 ground.velocityX = 0;
 trex.velocityY = 0;
 obstaclesGroup.setVelocityXEach(0);
 cloudsGroup.setVelocityXEach(0);
 
 //change the trex animation
 trex.changeAnimation("collided",trex_collided);
 
 //set lifetime of the game objects so that they are never destroyed
 obstaclesGroup.setLifetimeEach(-1);
 cloudsGroup.setLifetimeEach(-1);
 
 if(mousePressedOver(restart)) {
 reset();
 }
 }
 
 */
 drawSprites();
}

function spawnClouds() {
 //write code here to spawn the clouds
 if (frameCount % 60 === 0) {
 var cloud = createSprite(600,120,40,10);
 cloud.y = Math.round(random(80,120));
 cloud.addImage(cloudImage);
 cloud.scale = 0.5;
 cloud.velocityX = -3;
 
 //assign lifetime to the variable
 cloud.lifetime = 200;
 
 //adjust the depth
 cloud.depth = trex.depth;
 trex.depth = trex.depth + 1;
 
 //add each cloud to the group
 cloudsGroup.add(cloud);
 }
 
}

function spawnFoods() {
 //if(frameCount % 60 === 0) {
 var food = createSprite(690,485,10,40);
 //food.velocityX = (6 + 3*score/100);
 
 //generate random obstacles
 var rand = Math.round(random(1,2));
 switch(rand) {
 case 1: food.addImage(smoothieImg);
 break;
 case 2: food.addImage(cakeImg);
 break;
 default: break;
 }
 
 //assign scale and lifetime to the obstacle 
 food.scale = 0.5;
 food.lifetime = 300;
 //add each obstacle to the group
 foodGroup.add(food);
 //}
 return food;
}

function reset(){
 gameState = PLAY;
 ground.velocityX = -(6 + 3*score/100);
 gameOver.visible = false;
 restart.visible = false;
 
 obstaclesGroup.destroyEach();
 cloudsGroup.destroyEach();
 
 trex.changeAnimation("running",trex_running);
 
 score = 0;
 
}
