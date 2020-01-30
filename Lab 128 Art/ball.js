//Joe Untrecht
//1/28
var distance;
class Boid{
  constructor(x,y,dx,dy){
    this.loc=createVector(x,y);
    this.vel=createVector(dx,dy);
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
    this.loc.x= this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
  }
  render(){
    //draws lines
    for (var i=0; i<Boids.length; i++){
      distance= this.loc.dist(Boids[i].loc);
      if(distance<200){
        line(this.loc.x,this.loc.y,Boids[i].loc.x,Boids[i].loc.y)
      }
    }
  }
}//end Boid class
