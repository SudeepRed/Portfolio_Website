class bullet {
  constructor(xSpd, ySpd) {
    this.x = x;
    this.y = y;
    this.xSpd = 10 * xSpd;
    this.ySpd = 10 * ySpd;
    this.img = loadImage("assets/bullet.png");
  }

  display() {
    push();
    translate(this.x, this.y);
    this.img.resize(45, 0);
    fill(whiteContrast)
    stroke(redContrast)
    strokeWeight(7)
    rotate(Math.atan2(this.ySpd, this.xSpd) + PI / 2);
    image(this.img, 0, 0);
    circle(0,0,15);
    pop();
  }

  update() {
    this.x += this.xSpd;
    this.y += this.ySpd;

    //this.xSpd *= 0.994;
    //this.ySpd *= 0.994;
  }

  outOfBounds() {
    return (
      this.x > screen.width + 10 ||
      this.x < -screen.width - 10 ||
      this.y > screen.height + 10 ||
      this.y < -screen.height - 10
    );
  }

  hitScan() {
    for (var i = 0; i < virus.length; i++) {
      var collideOrNot = collideCircleCircle(
        this.x,
        this.y,
        10,
        virus[i].myX(),
        virus[i].myY(),
        virus[i].myR()
      );
      if (collideOrNot) {
        virus.splice(i, 1);
        objDeathSound.play()
        score += 1;
        
        return true;
      }
    }
    return false;
  }
}
