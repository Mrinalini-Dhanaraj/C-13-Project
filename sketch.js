var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, leafImg, leaf2Img;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
  leaf2Img = loadImage("redImage.png");
}

function setup(){
  createCanvas(400,400);
  
//Background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating Rabbit 
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX


  createApples();
  createLeaves();
  createLeaves2();
  drawSprites();
}

function createApples(){
   if (frameCount % 80 === 0){
     apples  = createSprite(random(50, 350),40,10,10);
     apples.addImage(appleImg);
     apples.scale = 0.05;
     apples.velocityY = 3;
   }
}
function createLeaves (){
    if (frameCount % 80 === 0){
      leaves = createSprite(random(50, 350),80,10,10);
      leaves.addImage(leafImg);
      leaves.scale = 0.05;
      leaves.velocityY = 3;
    }
}
function createLeaves2(){
    if (frameCount % 80 === 0){
      leaves2 = createSprite(random(50,350),120,10,10);
      leaves2.addImage(leaf2Img);
      leaves2.scale = 0.05;
      leaves2.velocityY = 3;
    }
 }