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
  if (keyIsDown(65)) x -= 5;

  if (keyIsDown(68)) x += 5;

  if (keyIsDown(87)) y -= 5;

  if (keyIsDown(83)) y += 5;
}
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
