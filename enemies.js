function Enemy(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  
  this.xdir = random(-1,1) * 10
  this.ydir = random(-1,1)* 10 

  this.toDelete = false; 
  
  this.show = function() {
    noStroke();
    fill(0, 255, 0);
    rect(this.x, this.y - this.height, this.width, this.height);
    fill(200, 100, 0);
    rect(this.x, this.y - this.height + 3, this.width - 4, 25);
    rect(this.x, this.y, 4, 10);
    
    rect(this.x+25, this.y, 5, 10);
  }
  
  this.move = function(){
    this.x = this.x + this.xdir;
    this.y = this.y + this.ydir;
    
    //bounce
    if(this.x < 0){
      this.xdir = -1*this.xdir;
    }
    else if (this.y > height){
      this.ydir = -1*this.ydir;
    }
    else if (this.x > width - this.width){
      this.xdir = -1* this.xdir;
    }
    else if (this.y < this.height){
      this.ydir = -1*this.ydir;
    } 
  }
  
  this.slow = function(){
    if (this.xdir > 0){
      this.xdir -= 3;
    }
    else{
      this.xdir += 3;
    }
    
    if (this.ydir > 0){
      this.ydir -=3 ;
    }
    else{
      this.ydir += 3;
    }
  }
  
  this.die = function(){
    this.toDelete = true;
  }
  
  this.kills = function(mc){
    var d1 = Math.abs(this.x - mc.x)
    if (d1 < 10 && mc.y < this.y && mc.y > this.y-this.height){
      return true;
    }
    else{
      return false;
    }
  }
}