//Joe Untrecht
//1/28
var distance;
var shapes=[];

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
    shapes[0]=ellipse(this.loc.x+20,this.loc.y+20,10,10);
    shapes[1]=ellipse(this.loc.x-20,this.loc.y+20,10,10);
    shapes[2]=ellipse(this.loc.x-20,this.loc.y-20,10,10);
    shapes[3]=ellipse(this.loc.x+20,this.loc.y-20,10,10);
    for (var i=0; i<4;i++){
      shapes[i]= ellipse(this.loc.x,this.loc.y,10,10);
    }
  }
}//end Boid class
