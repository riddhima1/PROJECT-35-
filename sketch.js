
var balloon,balloonImg1,balloonImg2,BalloonImg3;
var backgroundImg;
var database;
var height;

function preload(){
 
 backgroundImg = loadImage("sprite/bg.png");

 balloonImg1=loadAnimation("sprite/Balloon1.png");
 balloonImg2=loadAnimation("sprite/Balloon2.png","sprite/Balloon1.png",
 "sprite/Balloon2.png","sprite/Balloon2.png","sprite/Balloon2.png",
 "sprite/Balloon2.png","sprite/Balloon3.png","sprite/Balloon3.png","sprite/Balloon2.png");
}

function setup() {
  
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,650,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5; 

  var balloonHeight=database.ref('balloon/height');
  balloonHeight.on("value",readHeight, showError);
  textSize(20); 

}

function draw() {
  background(backgroundImg);
 
  backgroundImg = loadImage(bg);
  background(255,255,255);  
  if (keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x= balloon.x+10;
  }
  else if(keyDown())
  
  drawSprites();
}
