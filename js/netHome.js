var osc;

function setup(){
	// canvas = 
	createCanvas(windowWidth, windowHeight);
	//canvas.style('z-index', '-1');
//	canvas.position(0,0);
	background(255);
	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(160);
	osc.amp(.03);
	osc.start();
}

function draw(){

		background(255);
		 	
		 	// let r = map(mouseX, 0, width, 0, 255);
		 	// let g = map(mouseY, 0, height, 0, 255);
		 	// let b = random(0, 255);
			fill(255);

	var ex = random(windowWidth);
	var why = random(windowHeight);
	var ex2 = random(windowWidth);
	var why2 = random(windowHeight);
	var ex3 = random(windowWidth);
	var why3 = random(windowHeight);
	var ex4 = random(windowWidth);
	var why4 = random(windowHeight);
	var ex5 = random(windowWidth);
	var why5 = random(windowHeight);
	var ex6 = random(windowWidth);
	var why6 = random(windowHeight);
	var ex7 = random(windowWidth);
	var why7 = random(windowHeight);
	var ex8 = random(windowWidth);
	var why8 = random(windowHeight);

	line(mouseX, mouseY, ex, why);
	line(mouseX, mouseY, ex2, why2);
	line(mouseX, mouseY, ex3, why3);
	line(mouseX, mouseY, ex4, why4);
	line(mouseX, mouseY, ex5, why5);
	line(mouseX, mouseY, ex6, why6);
	line(mouseX, mouseY, ex7, why7);
	line(mouseX, mouseY, ex8, why8);
	line(ex, why, ex2, why2);
	line(ex, why, ex3, why3);
	line(ex, why, ex4, why4);
	line(ex, why, ex5, why5);
	line(ex, why, ex6, why6);
	line(ex, why, ex7, why7);
	line(ex, why, ex8, why8);
	line(ex2, why2, ex3, why3);
	line(ex4, why4, ex3, why3);
	line(ex5, why5, ex3, why3);
	line(ex6, why6, ex3, why3);
	line(ex7, why7, ex3, why3);
	line(ex8, why8, ex3, why3);
	line(ex2, why2, ex4, why4);
	line(ex5, why5, ex4, why4);
	line(ex6, why6, ex4, why4);
	line(ex7, why7, ex4, why4);
	//open
	line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));

	line(random(0, windowWidth), random(0, windowHeight), ex4, why4);
	line(ex, why, random(0, windowWidth), random(0, windowHeight));
	line(ex2, why2, random(0, windowWidth), random(0, windowHeight));
	line(random(0, windowWidth), random(0, windowHeight), ex3, why3);
	line(ex8, why8, random(0, windowWidth), random(0, windowHeight));
	line(ex5, why5, random(0, windowWidth), random(0, windowHeight));
	line(ex6, why6, random(0, windowWidth), random(0, windowHeight));
	line(ex7, why7, random(0, windowWidth), random(0, windowHeight));
	ellipse(ex, why, 60, 60);
	ellipse(ex2, why2, 60, 60);
	ellipse(ex3, why3, 60, 60);
	ellipse(ex4, why4, 60, 60);
	ellipse(ex5, why5, 60, 60);
	ellipse(ex6, why6, 60, 60);
	ellipse(ex7, why7, 60, 60);
	ellipse(ex8, why8, 60, 60);
	ellipse(mouseX, mouseY, 60, 60);

	var x1 =[ 400, 500, 600, 800, 900, 600, 1100, 800, 80, 190, 1250];
	var x2 =[ 500, 600, 700, 900, 1000, 700, 1200, 900, 180, 290, 1350];
	var y1 =[400, 110, 300, 130, 450, 320, 500, 690, 300, 400, 500];
	var y2 =[500, 210, 400, 230, 550, 420, 600, 790, 400, 500, 600];


	//triggers based on LOCATION

//1
	if(x1[0] < mouseX && mouseX < x2[0] && y1[0] < mouseY && mouseY < y2[0]){
		background(0);
			if(mouseIsPressed){
				window.location.href = 'netOne.html';
				background(255);
			}
	}

//2

	if(x1[1] < mouseX && mouseX < x2[1] && y1[1] < mouseY && mouseY < y2[1]){
		background(0);
			if(mouseIsPressed){
				window.location.href = 'netTwo.html';
			}
			if(frameCount % 237 === 0){
				window.location.href = 'netTwo.html';

			}
	}

//3

	if(x1[2] < mouseX && mouseX < x2[2] && y1[2] < mouseY && mouseY < y2[2]){
		background(0);	
		if(mouseIsPressed){
				window.location.href = 'netFour.html';
		}	if(frameCount % 237 === 0){
				window.location.href = 'netFour.html';

			}
	}




//4
	if(x1[3] < mouseX && mouseX < x2[3] && y1[3] < mouseY && mouseY < y2[3]){
		background(0);	
			if(mouseIsPressed){
				window.location.href = 'netFour.html';
			}
				if(frameCount % 237 === 0){
				window.location.href = 'netFour.html';

			}
	}

//5
	if(x1[4] < mouseX && mouseX < x2[4] && y1[4] < mouseY && mouseY < y2[4]){
		background(0);
			if(mouseIsPressed){
				window.location.href = 'netOne.html';
			}
		if(frameCount % 237 === 0){
				window.location.href = 'netOne.html';

			}

	}

//6

	if(x1[5] < mouseX && mouseX < x2[5] && y1[5] < mouseY && mouseY < y2[5]){
		background(0);	
			if(mouseIsPressed){
				window.location.href = 'netTwo.html';
			}	if(frameCount % 237 === 0){
				window.location.href = 'netTwo.html';

			}

	}

//7
	if(x1[6] < mouseX && mouseX < x2[6] && y1[6] < mouseY && mouseY < y2[6]){
		background(0);	
			if(mouseIsPressed){
				window.location.href = 'netFour.html';
			}	if(frameCount % 237 === 0){
				window.location.href = 'netFour.html';

			}
	}

//8

	if(x1[7] < mouseX && mouseX < x2[7] && y1[7] < mouseY && mouseY < y2[7]){
		background(0);	
			if(mouseIsPressed){
				window.location.href = 'netFour.html';
			}	if(frameCount % 237 === 0){
				window.location.href = 'netFour.html';

			}
	}

//9

	if(x1[8] < mouseX && mouseX < x2[8] && y1[8] < mouseY && mouseY < y2[8]){
		background(0);	
			if(mouseIsPressed){
				window.location.href = 'netOne.html';
			}	if(frameCount % 237 === 0){
				window.location.href = 'netOne.html';

			}
	}
//10
	if(x1[9] < mouseX && mouseX < x2[9] && y1[9] < mouseY && mouseY < y2[9]){
		background(0);	
			if(mouseIsPressed){
				window.location.href = 'netTwo.html';
			}	if(frameCount % 237 === 0){
				window.location.href = 'netTwo.html';

			}
	}
	

//11
	if(x1[10] < mouseX && mouseX < x2[10] && y1[10] < mouseY && mouseY < y2[10]){
		background(0);	
			if(mouseIsPressed){
				window.location.href = 'netFour.html';
			}	if(frameCount % 237 === 0){
				window.location.href = 'netFour.html';

			}

	}
	


	/* rect(x1[0], y1[0], 30, 30);

	rect(x1[1], y1[1], 30, 30);
	rect(x1[2], y1[2], 30, 30);
	rect(x1[3], y1[3], 30, 30);
	rect(x1[4], y1[4], 30, 30);
	rect(x1[5], y1[5], 30, 30);
	rect(x1[6], y1[6], 30, 30);
	rect(x1[7], y1[7], 30, 30);
	rect(x1[8], y1[8], 30, 30);
	rect(x1[9], y1[9], 30, 30);
	rect(x1[10], y1[10], 30, 30);
 */



}




function windowResized(){
resizeCanvas(windowWidth, windowHeight);

}

