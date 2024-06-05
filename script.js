// Set up the canvas and context
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Ball constructor
class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}

// Initialize the ball
const ball = new Ball(200, 160, 20, 2, 2, 'red');

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    ball.update();
}

// Start the animation
setInterval(animate, 10);