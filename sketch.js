const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var house1, house2, house3;
var backgroundImg, ground;
var button1, button2, button3;
var onestory, twostory, threestory;


var gameState = 0;



function preload() {
    backgroundImg = loadImage(background.jpg);
    onestory = loadImage(onestoryhouse.gif);
    twostory = loadImage(twostoryhouseyellowithblackroof.pdf);
    threestory = loadImage(threestoryhousenocolor.png);
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    onestory = new House(400, 200);
    twostory = new House(600, 200);
    threestory - new House(800, 200);

}

function draw(){

    background(backgroundImg);

    
    Engine.update(engine);
    ground.display();
    onestory.display();
    twostory.display();
    threestory.display();

}
