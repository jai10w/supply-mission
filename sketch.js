var helicopterIMG, helicopterSprite, packageSprite,packageIMG, ground2Sprite, wallSprite, wall2Sprite;
var packageBody,ground, wall1, wall2, ground2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	ground2Sprite=createSprite(350, 670, 200, 20);
	ground2Sprite.shapeColor=color("red");

	wallSprite=createSprite(260, 630, 20, 100);
	wallSprite.shapeColor=color("red");

	wall2Sprite=createSprite(440, 630, 20, 100);
	wall2Sprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	wall1 = Bodies.rectangle(260, 630, 20, 100, {isStatic:true} );
	World.add(world, wall1);

	wall2 = Bodies.rectangle(440, 630, 20, 100, {isStatic:true} );
	World.add(world, wall2);

	ground2 = Bodies.rectangle(350, 670, 200, 20, {isStatic:true} );
	World.add(world, ground2);

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody, false);
	packageBody.restitution = 0.7;
  }
}



