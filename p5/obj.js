class balloon{
	constructor(){
		this.side = int(random(4));
		switch (this.side)
		{
			case 0:
				this.x = 0;
				this.y = int(random(height));
				break;
			case 1:
				this.x = int(random(width));
				this.y = 0;
				break;
			case 2:
				this.x = width;
				this.y = int(random(height));
				break;
			case 3:
				this.x = int(random(width));
				this.y = height;
				break;
		}
		
		
	}
	
	display(){
		push();
		translate(this.x,this.y);
		stroke(white)
		strokeWeight(6)
		fill(red);
		ellipse(0, 0, this.r);
		pop();
	}
	
	update(){
		this.targetX = x;
		this.targetY = y;
		this.targetDir = createVector(this.targetX - this.x, this.targetY - this.y);
		this.targetDir.normalize();
		this.xSpd = this.targetDir.x*virusMultiplier;
		this.ySpd = this.targetDir.y*virusMultiplier;
		this.r = 12*virusSize;
		this.x += this.xSpd;
		this.y += this.ySpd;	
	}
	
	outOfBounds(){
		//console.log(floor(this.x)<=x && floor(this.x)>x-10  && floor(this.y)<=y && floor(this.y)>y-10)
		return floor(this.x)<=x && floor(this.x)>x-10  && floor(this.y)<=y && floor(this.y)>y-10;
	}
	
	myX(){
		return this.x;
	}
	
	myY(){
		return this.y;
	}
	
	myR(){
		return this.r;
	}
	
		
}
