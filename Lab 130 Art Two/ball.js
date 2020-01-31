//Joe Untrecht
//1/30
var distance;

class Boid{
  constructor(x,y,dx,dy,id){
    this.loc=createVector(x,y);
    this.vel=createVector(dx,dy);
    this.id=id;
    this.w=10;
  }
  run(){
    //main function
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){
    //bounces of edges
    if(this.loc.x<0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x>width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y<0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y>height){
      this.vel.y = -this.vel.y;
    }
  }

  update(){
    //movement
    this.clr=color(random(255),random(255),random(255));
    this.loc.x= this.loc.x+this.vel.x;
    this.loc.y=this.loc.y+this.vel.y;
    stroke(this.clr);
    strokeWeight(10);
    distance=MiddleBoid.loc.dist(OuterBoid.loc);
    if(distance<200){
      line(MiddleBoid.loc.x,MiddleBoid.loc.y,OuterBoid.loc.x,OuterBoid.loc.y+random(-50,50));
    }
    distance=MiddleBoid.loc.dist(OuterBoid2.loc);
    if(distance<200){
      line(MiddleBoid.loc.x,MiddleBoid.loc.y,OuterBoid2.loc.x,OuterBoid2.loc.y+random(-50,50));
    }
  }

  render(){
    //draws circles
    fill(this.clr);
    //ellipse(this.loc.x,this.loc.y,this.w,this.w);
  }
}//end Boid class
