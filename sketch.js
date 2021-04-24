const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7,rubber8,rubber9,rubber10;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);

    rubber1 = new Rubber(500,500,5);
    rubber2 = new Rubber(505,500,5);
    rubber3 = new Rubber(510,500,5);
    rubber4 = new Rubber(515,500,5);
    rubber5 = new Rubber(520,500,5);
    rubber6 = new Rubber(525,500,5);
    rubber7 = new Rubber(530,500,5);
    rubber8 = new Rubber(535,500,5);
    rubber9 = new Rubber(540,500,5);
    rubber10 = new Rubber(545,500,5);

    stone = new Stone(700,500);

    iron = new Iron(300,500);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();

    stone.display();
    
    iron.display();

}