//  Joe Untrecht
// 	1/30
//  This is a comment
//  The setup function function is called once when your program begins
var Boids=[];

function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  fill(200, 30, 150);
  //loads boids
  loadBoids(4);
}

function draw() {
  //runs Boids
  runBoids();
}

function loadBoids(n){
  MiddleBoid= new Boid(width/2,height/2,random(-100,100),random(-100,100),0);
  OuterBoid= new Boid(width/2,50,random(-100,100),random(-100,100),1);
  OuterBoid2= new Boid(width/2,50,random(-100,100),random(-100,100),1);
}

function runBoids(){
  MiddleBoid.run();
  OuterBoid.run();
  OuterBoid2.run();
}
