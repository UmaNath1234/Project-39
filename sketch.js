var path,boy,eggplant,copi,saag,steak;
var pathImg,boyImg,eggplantImg,copiImg,saagImg,steakImg;
var vegetableCollection = 0;
var eggplantG,copiG,saagG,steakG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  eggplantImg = loadImage("eggplant.png");
  copiImg = loadImage("copi.jpg");
  saagImg = loadImage("saag.jpg");
  steakImg = loadImage("steak.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("RunningKid",boyImg);
boy.scale=0.08;
  
  
eggplantG=new Group();
copiG=new Group();
saagG=new Group();
steakG=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  camera.position.x = displayHeight/2;
  camera.position.x = boy.x;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createEggplant();
    createCopi();
    createSaag();
    createSteak();

    if (eggplantG.isTouching(boy)) {
      eggplantG.destroyEach();
      vegetableCollection=vegetableCollection+50;
    }
    else if (copiG.isTouching(boy)) {
      copiG.destroyEach();
      vegetableCollection=vegetableCollection+100;
      
    }else if(saagG.isTouching(boy)) {
      saagG.destroyEach();
      vegetableCollection= vegetableCollection + 150;
      
    }else{
      if(steakG.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("RunningKid",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        eggplantG.destroyEach();
        copiG.destroyEach();
        saagG.destroyEach();
        steakG.destroyEach();
        
        eggplantG.setVelocityYEach(0);
        copiG.setVelocityYEach(0);
        saagG.setVelocityYEach(0);
        steakG.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Vegetables: "+ vegetableCollection,150,30);
  }

}

function createEggplant() {
  if (World.frameCount % 200 == 0) {
  var eggplant = createSprite(Math.round(random(50, 350),40, 10, 10));
  eggplant.addImage(eggplantImg);
  eggplant.scale=0.25;
  eggplant.velocityY = 3;
  eggplant.lifetime = 150;
  eggplantG.add(eggplant);
  }
}

function createCopi() {
  if (World.frameCount % 320 == 0) {
  var copi = createSprite(Math.round(random(50, 350),40, 10, 10));
  copi.addImage(copiImg);
  copi.scale=0.1;
  copi.velocityY = 3;
  copi.lifetime = 150;
  copiG.add(copi);
}
}

function createSaag() {
  if (World.frameCount % 410 == 0) {
  var saag = createSprite(Math.round(random(50, 350),40, 10, 10));
  saag.addImage(saagImg);
  saag.scale=0.05;
  saag.velocityY = 3;
  saag.lifetime = 150;
  saagG.add(saag);
  }
}

function createSteak(){
  if (World.frameCount % 530 == 0) {
  var steak = createSprite(Math.round(random(50, 350),40, 10, 10));
  steak.addImage(steakImg);
  steak.scale=0.25;
  steak.velocityY = 3;
  steak.lifetime = 150;
  steakG.add(steak);
  }
}