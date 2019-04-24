class MouseOnCanvas {
	constructor(canvas){
		this.x = 0;
		this.y = 0;

		let getPos = ({ clientX, clientY }) => {
			this.x = clientX;
			this.y = clientY;
		}

		canvas.addEventListener("mousemove", getPos);
	}
}


class Ball{
	constructor(x, y, radius, color){
		this.x = x || 0;
		this.y = y || 0;
		this.radius = radius || 2;
		this.color = color || '#a1afff';
		this.originalX = x || 0;
		this.originalY = y || 0;

		this.speedX = 0;
		this.speedY = 0;

		this.friction = 0.6;
		this.springFactor = 0.05;
	}

	setPosition(x, y){
		this.x = x;
		this.y = y;
	}

	moveSpeed({x, y}){
		let dx = this.x - x;
		let dy = this.y - y;
		let dist = Math.sqrt(dx*dx + dy*dy);
		
		if(dist < 30){
			let angle = Math.atan2(dx, dy);

			let tx = x + Math.sin(angle) * 30;
			let ty = y + Math.cos(angle) * 30;

			this.speedX += tx - this.x;
			this.speedY += ty - this.y;
		}

		// spring
		let dx1 = this.x - this.originalX;
		let dy1 = this.y - this.originalY;
		this.speedX += -1*dx1 * this.springFactor;
		this.speedY += -1*dy1 * this.springFactor;



		// friction
		this.speedX *= this.friction;
		this.speedY *= this.friction;


		this.x += this.speedX;
		this.y += this.speedY;
		
	}

	draw(ctx) {
		ctx.save();
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
}


let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let pos = new MouseOnCanvas(canvas);
let mouse = new Ball(pos.x, pos.y, 30, 'tomato');
let balls = [];


for(let i = 0, length = 15; i < length; i++){
	balls.push(
		new Ball(
			// Math.random() * canvas.width,
			// Math.random() * canvas.height
			canvas.width/2 + 100*Math.cos(i * 2*Math.PI/15),
			canvas.height/2 + 100*Math.sin(i * 2*Math.PI/15),
		)
	);
}


function connectDots(balls) {
	ctx.beginPath();

	for (var i = 0, jlen = balls.length; i <= jlen; ++i) {
		var p0 = balls[i + 0 >= jlen ? i + 0 - jlen : i + 0];
		var p1 = balls[i + 1 >= jlen ? i + 1 - jlen : i + 1];
		ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);
	}

	ctx.closePath();
	// ctx.stroke();
	ctx.fill();
}


function render(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	balls.forEach( ball => {
		ball.moveSpeed(pos);
		ball.draw(ctx);
	})

	connectDots(balls);

	mouse.setPosition(pos.x,pos.y,20);
	mouse.draw(ctx);

	window.requestAnimationFrame(render);
}


render();

