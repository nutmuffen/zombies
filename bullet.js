function bullet(x,y){
  this.x = x;
  this.y = y;
  
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(255, 255, 0);
    ellipse(this.x, this.y, 15,15);
  }
  
  this.move = function(){
    this.x = this.x + 11;
  }
  
  this.hits = function(enemy){
    var d = dist(this.x, this.y, enemy.x, enemy.y - enemy.height + 7);
    if (d < 17){
      return true;
    }
    else{
      return false;
    }
  }
  
  this.slows = function(enemy){
    var d1 = Math.abs(this.x - enemy.x)
    if (d1 < 10 && this.y < enemy.y && this.y > enemy.y-enemy.height){
      return true;
    }
    else{
      return false;
    }
  }
  
  this.smash = function(){
    this.toDelete = true;
    
  }
}