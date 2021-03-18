let osc;
let FREQUE = 150;


function setup(){
	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(FREQUE);
	osc.amp(.03, .5);
	osc.start();
}

function draw(){

if(framecount % 130 === 0){
		osc.amp(.03, .5);
	osc.freq(150);

}
}

function mouseClicked(){
	FREQUE += random(-10, 10);
	osc.freq(FREQUE);
}