function mc(){
  this.x = width/2;
  this.y = height/2;
  
  this.toDelete=false;
  
  this.show = function() {
    fill (255);
    noStroke();
    ellipse(this.x, this.y, 50,50);
    fill (200);
    rect(this.x + 20, this.y + 10, 15, 5);
    
    
    fill (119, 87, 41);
    ellipse(this.x, this.y -20, 35,20);
    
  }
  
  this.die = function(){
    toDelete = true;
  }
}