const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var world,engine;

function setup() {
  canvas = createCanvas(windowWidth/1.5, windowHeight/1.5);

  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  P1 = new Pendulum(210,350,"magenta");
  P2 = new Pendulum(270,350,"magenta");
  P3 = new Pendulum(330,350,"magenta");
  P4 = new Pendulum(390,350,"magenta");
  P5 = new Pendulum(450,350,"magenta");

  S1 = new Sling(P1.body,{x: 210, y: 100});
  S2 = new Sling(P2.body,{x: 270, y: 100});
  S3 = new Sling(P3.body,{x: 330, y: 100});
  S4 = new Sling(P4.body,{x: 390, y: 100});
  S5 = new Sling(P5.body,{x: 450, y: 100});

}
 
function draw() {
  background("black");

  Engine.update(engine);

  P1.display();
  P2.display();
  P3.display();
  P4.display();
  P5.display();

  S1.display();
  S2.display();
  S3.display();
  S4.display();
  S5.display();

}

function mouseDragged(){
  Matter.Body.setPosition(P1.body,{x: mouseX, y: mouseY});
}