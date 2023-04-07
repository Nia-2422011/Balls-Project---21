
var ball;
var world;
var radius = 40;
var groundObj;
var leftSide;
var rightSide;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	world = engine.world;
	engine = Engine.create();

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:1.2
		
	}

	World.add(world,ball);
	leftSide = new ground(1100,600,20,120);
	groundObj=new ground(width/2,670,width,20);
	ball = Bodies.circle(260,100,radius/2,ball_options);
	Engine.run(engine);
	rightSide = new ground(1350,600,20,120);
	
  
}
function draw() {
  groundObj.display(); 
  rightSide.display();
  leftSide.display(); 
  background(0); 
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  
  
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}










