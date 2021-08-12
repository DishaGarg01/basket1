const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var ball;
var chain;
var backgroundImage 

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

ball=new Ball(300,50,100)

ground=new Ground(600,350,1200,50)

chain=new Rope(ball.body,{x:400,y:50})

basket1=new Basket(1100,250,150,20)
basket2=new Basket(1025,200,20,100)
basket3=new Basket(1175,200,20,100)

}

function draw(){
    background("black");
    Engine.update(engine);
    
ball.display()

ground.display()

chain.display()

basket1.display()

basket2.display()

basket3.display()

console.log(ball.body.position.x)
console.log(ball.body.position.y,"y")
}


function mouseDragged()
{
Matter.Body.setPosition(ball.body,{x:100,y:100})

}

function mouseReleased()
{
chain.fly()

}





