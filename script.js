class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
}

const ball = new Ball(200, 160, 20, 2, 2, 'red');
console.log(ball);