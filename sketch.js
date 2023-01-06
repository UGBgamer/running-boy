var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var power,powerIage

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  powerImage=loadImage("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

power = createSprite(180,90,20,10)
power.addImage(powerImage)
power.scale=0.2
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
//leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  boy.collide(power)
  
  

  if(path.y > 400 ){
    path.y = height/2;
    power.velocityY=2
  }

  if(boy.isTouching(power)){
    boy.velocityY=-2
    power.remove()
  }
  

  
  drawSprites();
  if(boy.y<0){
    text("you completed the race",190,200)
  }
}
