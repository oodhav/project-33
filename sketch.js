const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var snow = [];


function preload() {
    bg = loadImage("snow.jpg")
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    
  background(bg)

    Engine.update(engine);

    if (frameCount%5 == 0){
      snow.push(new Snow(random(0,800),-20,30))
      

    }

    for(var i = 0; i<snow.length; i++){
      snow[i].display()
    }
    }

    