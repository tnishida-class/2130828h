let x, y, vx, vy, c;

function setup(){
	createCanvas(500, 550);
	x = width / 2;
	y = height / 2;
	vx = 8;
	vy = 8;
	rt = 220 
	ru = 220
}

function draw(){
	background(160, 192, 225);
	fill('red');
	ellipse(x, y, 20);

	x += vx;
	y += vy;
	
	if(x < 0 || x > width){ vx = -1 * vx; }
	if(y < 0 || y > height){ vy = -1 * vy; }

	x = constrain(x, 0, width);
	y = constrain(y, 0, height);
	
	if( ru < x && x < (ru + 60)){
	 if((0 < y && y < 10) || (530 < y && y < 540)){
      x = width / 2;
		  y = height / 2; 
		}
	}

	fill(51);
	rect(rt, 0, 60, 10);
	rect(ru, 540, 60, 10);
}

function mouseDown() {
	rt = rt + 10;
	ru = ru + 10;
	if(rt > 440){
		rt = rt - 440
		ru = ru - 440
	}
}

function mouseUp() {
	draw()
}