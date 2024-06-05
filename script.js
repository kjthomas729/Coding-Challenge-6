// Ball class definition
class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    // Method to draw the ball
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Method to update the ball's position
    update(canvas, ctx) {
        // Collision detection with canvas walls
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // Update ball's position
        this.x += this.dx;
        this.y += this.dy;

        // Draw the ball
        this.draw(ctx);
    }
}

// Initialize canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create a new ball instance
const ball = new Ball(200, 160, 20, 2, 2, 'red');

// Function to animate the ball
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update ball's position and draw it
    ball.update(canvas, ctx);
}

// Start the animation using setInterval
setInterval(animate, 1000 / 60); // 60 frames per second