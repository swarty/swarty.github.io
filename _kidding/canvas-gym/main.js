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

		this.speedX = 0;
		this.speedY = 0;

		this.friction = 0.9;
	}

	setPosition(x, y){
		this.x = x;
		this.y = y;
	}

	moveSpeed({x, y}){
		let dx = this.x - x;
		let dy = this.y - y;
		let dist = Math.sqrt(dx*dx + dy*dy);
		
		if(dist < 20){
			let angle = Math.atan2(dx, dy);

			let tx = x + Math.sin(angle) * 20;
			let ty = y + Math.cos(angle) * 20;

			this.speedX += tx - this.x;
			this.speedY += ty - this.y;
		}

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
let mouse = new Ball(pos.x, pos.y, 20, 'tomato');
let balls = [];


for(let i = 0, length = 100; i < length; i++){
	balls.push(
		new Ball(
			Math.random() * canvas.width,
			Math.random() * canvas.height
		)
	);
}



function render(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	balls.forEach( ball => {
		ball.moveSpeed(pos);
		ball.draw(ctx);
	})

	mouse.setPosition(pos.x,pos.y,20);
	mouse.draw(ctx);

	window.requestAnimationFrame(render);
}


render();

