var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(width/2, 670, width, 20)
  left_ground= new Ground(1100, 600, 20, 120)
  right_ground= new Ground(1300, 600, 20, 120)
	var ball_options= {
		isStatic: false,
		restitution: 0.3,
        friction: 0,
		density: 1.2
	}
	ball= Bodies.circle(200, 200, 40, ball_options)
	World.add(world, ball)
   

	Engine.run(engine);
	rectMode(CENTER)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  left_ground.display();
  right_ground.display();
  ellipse(this.ball.position.x, this.ball.position.y, 40);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 85, y: -80})
	}
  }



