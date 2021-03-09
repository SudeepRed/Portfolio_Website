let bg;
let anitidotesFired = [];
let virus = [];
let virusMultiplier = 0.5;
let virusSize = 5;
let score = 0;
let mouseAngle = 0;
let highScore = 0;
let anti;
let speed=2.8;
let waveIntitialised=false;
let x = screen.width / 2;
let y = screen.height / 2;
let virusOnScreen=0;
let waveNumber=1;
let mode=0;
let intro;
let vx=x-400
let vy=y-300
let videoMoveSpeed=2;
let div;
let shootSound,objDeathSound,win,gameOver,hit,newWave;
function setup() {
  preLoad();
  frameRate(144);
  var cnv = createCanvas(screen.width, screen.height);
  imageMode(CENTER);
  rectMode(CENTER);
  cnv.position(0, 0, "fixed");
}
function preLoad(){
  shootSound=loadSound("assets/shoot.mp3")
  objDeathSound=loadSound("assets/objDeath.mp3")
  hit=loadSound("assets/hitByObj.mp3")
  gameOver=loadSound("assets/gameOver.mp3")
  win=loadSound("assets/win.mp3")
  newWave=loadSound("assets/newWave.mp3")
  anti = loadImage("assets/antiV2.png");
}
function draw() {
  document.getElementById("score").innerHTML= "Score - "+score;
  document.getElementById("wave").innerHTML= "Wave - "+waveNumber;
  clear();
  menus();
  
  
}
function menus(){
  if(mode==4){
    $("#win").fadeIn(1000);
    
  }
  if(mode==3){
    $("#ded").fadeIn(1000);
    
  }
  if(mode==1){
  
    push();
    player();
    pop();
    checkMovement();
    spawnvirus();
    
  }
  if(mode==2){
    score=0;
    virus=[];
    virusOnScreen=0;
    waveIntitialised=false;
    waveNumber=1;
    virusMultiplier = 0.5;
    virusSize=5;
    mode=1;

  }
}
function spawnvirus(){
  if(virusOnScreen<=25){
		let newBalloon = new balloon();
		virus.push(newBalloon);
    virusOnScreen+=1;
	
}
else{
  waveIntitialised=true;
  showVirus();
}

}
function showVirus(){
  if(waveIntitialised && virus.length>0){
  {
    for(let i=0;i<virus.length;i++){
		virus[i].display();
		virus[i].update();
		if (virus[i].outOfBounds()){
      		virus.splice(i,1);
          score-=1;
          hit.play();
          if(score<=0){
            gameOver.play()
            mode=3;
            break;

          }
          
    	}
	}
}
  }
  else{
    if(waveNumber==10){
      win.play()
      mode=4
    }
    else{
    newWave.play()
    newWave.stop(1);
    virusOnScreen=0;
    waveIntitialised=false;

    waveNumber+=1;
    increaseDifficulty(); 
  }
  }
}
function increaseDifficulty(){
  virusMultiplier += 0.5;
	if (virusSize < 5){
		virusSize -= 0.01;
	}
}

function player() {
  anti.resize(40, 0);
  push();
  translate(x, y);
  mouseAngle = Math.atan2(mouseY - y, mouseX - x);
  rotate(mouseAngle - PI / 2);
  image(anti, 0, 0);
  
  pop();
  shootBullet();

}
function shootBullet() {
  for (var i = 0; i < anitidotesFired.length; i++) {
    anitidotesFired[i].display();
    anitidotesFired[i].update();
    if (anitidotesFired[i].outOfBounds()) {
      anitidotesFired.splice(i, 1);
    } else if (anitidotesFired[i].hitScan()) {
      anitidotesFired.splice(i, 1);
    }
  }
}
function checkMovement() {
  
  if (keyIsDown(65)) {
    x -= speed;
    if(keyIsDown(87))
    {y -= speed;
      if(window.pJSDom[0].pJS.particles.move.direction!="bottom-left")
      {window.pJSDom[0].pJS.particles.move.direction="bottom-left";
      window.pJSDom[0].pJS.fn.particlesRefresh()}
    }
    else if(keyIsDown(83))
    {y += speed;
      if(window.pJSDom[0].pJS.particles.move.direction!="top-right")
      {window.pJSDom[0].pJS.particles.move.direction="top-right";
      window.pJSDom[0].pJS.fn.particlesRefresh()}
    }
    else{
    if(window.pJSDom[0].pJS.particles.move.direction!="right")
      {window.pJSDom[0].pJS.particles.move.direction="right";
      window.pJSDom[0].pJS.fn.particlesRefresh()}
    }

  }
  else if (keyIsDown(68)) {
    x += speed;
    if(keyIsDown(87))
    {y -= speed;
      if(window.pJSDom[0].pJS.particles.move.direction!="bottom-left")
      {window.pJSDom[0].pJS.particles.move.direction="bottom-left";
      window.pJSDom[0].pJS.fn.particlesRefresh()}
    }
    else if(keyIsDown(83))
    {y += speed;
      if(window.pJSDom[0].pJS.particles.move.direction!="top-left")
      {window.pJSDom[0].pJS.particles.move.direction="top-left";
      window.pJSDom[0].pJS.fn.particlesRefresh()}
    }
    else{
    if(window.pJSDom[0].pJS.particles.move.direction!="left")
      {window.pJSDom[0].pJS.particles.move.direction="left";
      window.pJSDom[0].pJS.fn.particlesRefresh()}
    }


  }

  else if (keyIsDown(87)) {
    y -= speed;
    
    if(window.pJSDom[0].pJS.particles.move.direction!="bottom")
      {window.pJSDom[0].pJS.particles.move.direction="bottom";
      window.pJSDom[0].pJS.fn.particlesRefresh()}


  }

  else if (keyIsDown(83)) {
    y += speed;
    if(window.pJSDom[0].pJS.particles.move.direction!="top")
      { window.pJSDom[0].pJS.particles.move.direction="top";
        window.pJSDom[0].pJS.fn.particlesRefresh()}


  }
  else{
    if(window.pJSDom[0].pJS.particles.move.direction!="none")
      { window.pJSDom[0].pJS.particles.move.direction='none';
        window.pJSDom[0].pJS.fn.particlesRefresh()}
  }

}
function mouseClicked() {
  if(mode==1){
  shootSound.play();

  let mouseVector = getMouseVector();
  oneBullet = new bullet(mouseVector.x, mouseVector.y);
  anitidotesFired.push(oneBullet);
}
}
function getMouseVector() {
  let mouseXalt = mouseX - x;
  let mouseYalt = mouseY - y;
  let mouseDir = createVector(mouseXalt, mouseYalt);
  mouseDir.normalize();
  return mouseDir;
}
