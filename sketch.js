const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
var ball,box,handle,button
var engine,world

function setup() {
  createCanvas(800,600);
  engine=Engine.create()
  world=engine.world
  
var options={
  isStatic:true
}
var ball_options={
  restituition:0.8,
  

}
  box=Bodies.rectangle(400,300,100,100,options)
  World.add(world,box)
  handle=Bodies.rectangle(300,320,200,20,options)
  World.add(world,handle)
  ball=Bodies.circle(400,200,50,ball_options)
  World.add(world,ball)

  button=createButton("Click to Blow")
  button.position(400,500)
  //button.class("blowButton")
  button.mouseClicked(force)
  
  rectMode(CENTER)
  ellipseMode(RADIUS)



}

function draw() {
  background(0);
  Engine.update(engine)
  rect(handle.position.x,handle.position.y,200,20)  
  rect(box.position.x,box.position.y,100,100)
  push()
  fill("white")
  ellipse(ball.position.x,ball.position.y,50)
  pop()
  drawSprites();
}

function force(){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}