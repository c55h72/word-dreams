


//GREEEN
var osc;
let oscHz = 160;
var zCo = 1;
let camX=0;
let camY=0;
let camZ=0;
var timer = 20;
var bgShade=255;
let img;


let textOne;

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);

	  img = loadImage('rgb.png');

	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(oscHz);
	osc.amp(.03);
	osc.start();

	// textOne = createGraphics(200, 200);
	// textOne.fill(0);
	// textOne.textAlign(CENTER);
	// textOne.textSize(54);
	// textOne.text('hello', 100, 50);

	wordObjectOne = new Word3D( 'you (i) (?)', 1, 2, 30, false);
	wordObjectTwo = new Word3D( '                                                                                                                                                                                  am (?)', 0.5, 0.5, 30, false);
	wordObjectThree = new Word3D( 'is (?) (it)                                                                                                                                                         ', 0.5, 0.5, 30, false);


}

function drawLine(x1, y1, z1, x2,y2, z2){
stroke(0, 255, 0);
  beginShape();
  vertex(x1,y1,z1);
  vertex(x2,y2,z2);  
  endShape();
}

function draw(){
	 // push();
	 // texture(textOne);
	 // plane(200, 200);
	 // pop();
	let mouseEX = map(mouseX, 0, windowWidth, -windowWidth/2, windowWidth/2);
	let mouseWHY = map(mouseY, 0, windowHeight, -windowHeight/2, windowHeight/2);
	
wordObjectOne.show()
wordObjectTwo.show()
wordObjectThree.show()


	stroke(0, 255, 0);
	var x = random(-windowWidth/2, windowWidth/2);
	var y = random(-windowHeight/2, 0);
	drawLine(-windowWidth/2, 0, 0, x, -y, 0);
	drawLine(windowWidth/2, 0, 0, x, -y, 0);
	camera(0, 0, (height/2.0)*zCo / tan(0.5), camX, camY, camZ, 0, 1, 0)

		if(frameCount % 20 == 0){
	background(bgShade);

	}

print(zCo);

		if(keyIsDown(UP_ARROW)){			
			zCo-=0.001
			bgShade-=1;
				osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(oscHz);
	osc.amp(.03);
	osc.start();
		}
		
		if(keyIsDown(DOWN_ARROW)){
			zCo+=0.001
			bgShade+=1;
				osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(oscHz);
	osc.amp(.03);
	osc.start();
		}

		if(keyIsDown(RIGHT_ARROW)){
			camX+=1;

			if(camX===1200){
				camX=-1200;
			}
		}
		if(keyIsDown(LEFT_ARROW)){
			camX-=1;

			if(camX===-1200){
				camX=1200;
			}
		}

if(zCo < .07){
					window.location.href = 'index.html';

}
		if(-100 < mouseEX && mouseEX < 100 && -100 < mouseWHY && mouseWHY < 100){
			if(mouseIsPressed){
				window.location.href = 'netTwo.html';

			}
		}

}

