let bg;
let bulletsFired = [];
let targetBalloons = [];
let mainTurrent;
let turPosX = 0;
let turPosY = 0;
let targetTimer = 0;
let balloonSpawnMultiplier = 2;
let balloonSizeMultiplier = 2;
let score = 0;
let Retry;
let mouseAngle = 0;
let highScore = 0;
let anti;
function setup() {
  var cnv = createCanvas(screen.width, screen.height);
  imageMode(CENTER);
  rectMode(CENTER);
  anti = loadImage("assets/anti.png");
  cnv.position(0, 0, "fixed");
}
let x = screen.width / 2;
let y = screen.height / 2;
function draw() {
  //background(0);
  clear();
  //window.pJSDom[0].pJS.particles.move.direction='none';
  background("rgba(255,0,0, 0)");
  push();
  player();
  pop();

}
function player() {
  anti.resize(70, 0);
  push();
  translate(x, y);
  mouseAngle = Math.atan2(mouseY - y, mouseX - x);
  rotate(mouseAngle - PI / 2);
  image(anti, 0, 0);
  checkMovement();
  pop();
  shootBullet();
  //test();

}
function shootBullet() {
  for (var i = 0; i < bulletsFired.length; i++) {
    bulletsFired[i].display();
    bulletsFired[i].update();
    if (bulletsFired[i].outOfBounds()) {
      bulletsFired.splice(i, 1);
    } else if (bulletsFired[i].hitScan()) {
      bulletsFired.splice(i, 1);
    }
  }
}
function checkMovement() {
  
  if (keyIsDown(65)) {
    x -= 5;
    if(keyIsDown(87))
    {y -= 5;
      if(window.pJSDom[0].pJS.particles.move.direction!="bottom-left")
      {window.pJSDom[0].pJS.particles.move.direction="bottom-left";
      window.pJSDom[0].pJS.fn.particlesRefresh()}
    }
    else if(keyIsDown(83))
    {y += 5;
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
    x += 5;
    if(keyIsDown(87))
    {y -= 5;
      if(window.pJSDom[0].pJS.particles.move.direction!="bottom-left")
      {window.pJSDom[0].pJS.particles.move.direction="bottom-left";
      window.pJSDom[0].pJS.fn.particlesRefresh()}
    }
    else if(keyIsDown(83))
    {y += 5;
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
    y -= 5;
    
    if(window.pJSDom[0].pJS.particles.move.direction!="bottom")
      {window.pJSDom[0].pJS.particles.move.direction="bottom";
      window.pJSDom[0].pJS.fn.particlesRefresh()}


  }

  else if (keyIsDown(83)) {
    y += 5;
    if(window.pJSDom[0].pJS.particles.move.direction!="top")
      {window.pJSDom[0].pJS.particles.move.direction="top";
      window.pJSDom[0].pJS.fn.particlesRefresh()}


  }

}
// function test(){
//   window.addEventListener('keypress',(e)=>{
          
//     if(e.code=="KeyW"){
//       window.pJSDom[0].pJS.particles.move.direction="top";
//     }
//     if(e.code=="KeyS"){

    
//     }
//     if(e.code=="KeyA"){
      

//     }
//     if(e.code=="KeyD"){
  
//     }
//   });
// }
function mouseClicked() {
  
  let mouseVector = getMouseVector();
  oneBullet = new bullet(mouseVector.x, mouseVector.y);
  bulletsFired.push(oneBullet);
}
function getMouseVector() {
  let mouseXalt = mouseX - x;
  let mouseYalt = mouseY - y;
  let mouseDir = createVector(mouseXalt, mouseYalt);
  mouseDir.normalize();
  return mouseDir;
}
