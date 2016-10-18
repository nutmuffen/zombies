var mc;
var enemies = [];
var bullets = [];
var ammo;

function setup() {
  createCanvas (800,600);
  mc = new mc();
  
  for (var i = 0 ; i<5; i++){
    enemies[i] = new Enemy(width-200, height-200, 30, random(80, 180));
  };
  
  test_bull = new bullet(width/2,height/2);
  
  ammo = 6;
}

function draw() {
  background(0);
  
  fill(255);
  textSize(64);
  text("F to Fire", 100, 100);
  
  mc.show();
  
    for (var i = 0 ; i<enemies.length; i++){
    enemies[i].show();
    enemies[i].move();
  };
  
  for (var i = 0; i < bullets.length; i++){
    bullets[i].show();
    bullets[i].move();
    
    for (var j = 0 ; j < enemies.length; j++){
      if(bullets[i].hits(enemies[j])){
        bullets[i].smash();
        console.log("HEY");
        enemies[j].die();
      }
        else if(bullets[i].slows(enemies[j])){
          bullets[i].smash();
          enemies[j].slow();
          console.log("SLOWM8");
        }
        
      if(enemies[j].kills(mc)){
        mc.die();
      }
      }
    }
  
  
  for (var i =0; i<bullets.length;i++){
    if (bullets[i].toDelete){
      bullets.splice(i, 1);
    }
  }
  
  for (var i =0; i<enemies.length; i++){
    if(enemies[i].toDelete){
      enemies.splice(i,1);
    }
  }
  
  if(mc.toDelete){
    remove();
  }
  
  if (enemies.length < 1){
    fill(200);
    textSize(64);
    text("ay lmao u won", 200,200);
  }
  

  
  
  
  mc.x = (mouseX);
  mc.y = (mouseY);
  
}

function keyPressed() {
  if (key === 'F'){
    if (ammo > 0){
      var bullit = new bullet(mouseX + 30, mouseY + 10);
      bullets.push(bullit);
    }
    else{
      textSize(32);
      fill(255);
      text("RELOAD", 200, 200);
    }
  }
}