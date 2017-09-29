// Initial Setup
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const devicePixelRatio = window.devicePixelRatio
canvas.width = innerWidth * devicePixelRatio;
canvas.height = innerHeight * devicePixelRatio;
ctx.scale(devicePixelRatio, devicePixelRatio)

// Variables
const mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2 
};

const colors = [
	'#2185C5',
	'#7ECEFD',
	'#FFF6E5',
	'#FF7F66'
];


// Event Listeners
addEventListener('mousemove', event => {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener('resize', () => {
	canvas.width = innerWidth;	
	canvas.height = innerHeight;

	init();
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
function Object(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;

	this.update = () => {
		this.draw();
	};

	this.draw = () => {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	};
}


// Implementation
let objects;
function init() {
	objects = []

	for (let i = 0; i < 400; i++) {
		// objects.push();
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
	// objects.forEach(object => {
	// 	object.update();
	// });
}

init();
animate();