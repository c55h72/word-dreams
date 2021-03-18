

//RED!!!!!!

var osc;
var playing = true;
var oscHz = 100;

var zCo = 1;
let camX=0;
let camY=0;
let camZ=0;
var timer = 20;


function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);

	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(oscHz);
	osc.amp(0);
	osc.start();
}

function drawLine(x1, y1, z1, x2,y2, z2){
  beginShape();
  vertex(x1,y1,z1);
  vertex(x2,y2,z2);
  endShape();
}

function draw(){
let mouseEX = map(mouseX, 0, windowWidth, -windowWidth/2, windowWidth/2);
let mouseWHY = map(mouseY, 0, windowHeight, -windowHeight/2, windowHeight/2);

	print(oscHz);


	stroke(255, 0, 0);

	var x = random(-windowWidth/2, windowWidth/2);
	var y = random(-windowHeight/2, 0);
	drawLine(-windowWidth/2, 0, 0, x, -y, 0);
	drawLine(windowWidth/2, 0, 0, x, -y, 0);
	camera(0, 0, (height/2.0)*zCo / tan(0.5), camX, camY, camZ, 0, 1, 0);

	if(frameCount % 60 == 0){
	background(255);
	}
	if(frameCount % 30 == 0){
	background(0);
	}
	if(frameCount % 60 == 0){
	background(255);
	}

		if(keyIsDown(UP_ARROW)){
			zCo-=0.001;
			if(oscHz > 80){
			osc.amp(0.3, 2);
			oscHz -= .1;
				osc.freq(oscHz);
			}
		}

		if(keyIsDown(DOWN_ARROW)){
			zCo+=0.001;
			if(oscHz < 550){
			oscHz += .1;
				osc.freq(oscHz);
			}

		}

		if(keyIsDown(RIGHT_ARROW)){
			camX+=1;
	oscHz -= .1;
				osc.freq(oscHz);

			if(camX===1200){
				camX=-1200;
			}
		}
		if(keyIsDown(LEFT_ARROW)){
			camX-=1;
	oscHz += .1;
				osc.freq(oscHz);
			if(camX===-1200){
				camX=1200;
			}
		}

		if(-100 < mouseEX && mouseEX < 100 && -100 < mouseWHY && mouseWHY < 100){
			if(mouseIsPressed){
				window.location.href = 'netThree.html';
			}
		}
}
