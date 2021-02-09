
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground1;
var ground2;
var ground3;
var ground4;
var door;
var level1;
var level2;
var player1;
var player2;
var boundary1;
var gameState="level1";


function preload() {
    backgroundImg = loadImage("IMAGES/bg.jpg");
   
}

function setup() {
	var canvas = createCanvas(700,400);
	engine = Engine.create();
  world = engine.world;
  
 
  
  ground1 = new Ground(200,360,750,10);
  ground2 = new Ground(640,260,130,10);
  ground3 = new Ground(5,250,10,800);
  ground4 = new  Ground(580,310,10,110);
  player1  = new Player(300,100,50,50);
  door    = new Door (690,215,30,80);
  boundary1 = new Ground2(40,330,700,10);
  player2  = new Player2(50,290,30,30);
 
 


 
   
 
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  
  background(backgroundImg);
  Engine.update(engine);

 

  boundary1.display();
  player2.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  player1.display();
  door.display();
  
  

  

if(player1.body.position.x > 620 && gameState =="level1"){
  console.log("/////////////GameState : ",gameState);
  console.log("////////////isTouching : ",isTouching(player1,door))
    if(isTouching(player1, door)){ 
     l2Scene();
     }

  }
  
  

  drawSprites();
 
}
function keyPressed() {
  if(gameState == "level1"){
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.applyForce(player1.body,player1.body.position,{x:20,y:0});

  }
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:-40});

  }
  if (keyCode === LEFT_ARROW) {

    Matter.Body.applyForce(player1.body,player1.body.position,{x:-20,y:0});

  }
}


}

function l2Scene(){
console.log("Inside switchScene");

backgroundImg = loadImage("IMAGES/l2.jpg")

  
  gameState="level2"

console.log(gameState);
 
}


function isTouching(object1,object2){
  
  object1Pos=object1.body.position;
  object2Pos=object2.body.position;
 
  if (object1Pos.x - object2Pos.x < object2.width/2 + object1.width/2
    && object2Pos.x - object1Pos.x < object2.width/2 + object1.width/2
    && object1Pos.y - object2Pos.y < object2.height/2 + object1.height/2
    && object1Pos.y - object2Pos.y < object2.height/2 + object1.height/2) {
    
    return true;

  }
  else {
    return false;
  } 
}
 

