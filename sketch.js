var mc = [];
var enemies = [];
var bullets = [];
var ammo;
var game = 1;

function setup() {
  createCanvas (800,600);
  mc[0] = new mc();
  
  for (var i = 0 ; i<7; i++){
    enemies[i] = new Enemy(width-75, random(200, height-200), 30, random(80, 180));
  };
  
  test_bull = new bullet(width/2,height/2);
  
  ammo = 12;
}

function draw() {
  background(0);
  
  fill(150);
  textSize(64);
  text("F to Fire, R to Reset", 100, 100);
  textSize(32);
  text("Ammo:" + ammo, 150,150);
  
  if (game == 0 || ammo < 1){
    fill(255,0,0);
    textSize(88);
    text("GAME OVER", 200,height/2);
    textSize(32);
    text("git gud scrub", 200, height/2+100);
    mc[0].die();
  }
  
  mc[0].show();
  
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
  
  if(mc[0].toDelete){
    mc.splice(0,1);
  }
  
  if (enemies.length < 1){
    fill(200);
    textSize(64);
    text("ay lmao u won", 200,200);
  }
  
  mc[0].x = (mouseX);
  mc[0].y = (mouseY);
  
  for (var i =0; i<enemies.length; i++){
    if (mc[0].collides(enemies[i])){
      console.log("fuck");
      game = 0;
    }
  }
  
  
  
}

function keyPressed() {
  if (key === 'F'){
    if (ammo > 0 && game == 1){
      var bullit = new bullet(mouseX + 30, mouseY + 10);
      bullets.push(bullit);
      ammo -= 1;
    }
    else{
      textSize(32);
      fill(255);
      text("RELOAD", 200, 200);
    }
  }
  
  if(key === 'R'){
    game = 1;
    ammo = 12;
    setup();
  }
}