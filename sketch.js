//namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine,world;
var ground
function setup(){
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var options = {
        isStatic:true
    }
    ground = Bodies.rectangle(200,370,400,50,options);
    World.add(world,ground);
    var options={
      restitution:1.5
    } 
    ball= Bodies.circle(250,250,20,options);
    World.add(world,ball);

    console.log(ground);
    console.log(ground.position.y);
}
function draw(){
    background(0)

    Engine.update(engine);

    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,50);
    
    ellipseMode(CENTER)
    ellipse(ball.position.x,ball.position.y,50,50);
}






