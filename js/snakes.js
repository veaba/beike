var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

var WIDTH = window.innerWidth,HEIGHT = window.innerHeight;
var COUNT = Math.floor(WIDTH * HEIGHT * 0.0001);
var PADDING = 10;
var PRECISION = 10;
var SIZE = 2;
var gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
gradient.addColorStop(0, '#5f2c82');
gradient.addColorStop(1, '#49a09d');
var COLOR = '#f7f1e3';
var BGCOLOR = gradient;
var WRAPPER = document.getElementById('wrapper');

var NEXTFRAME = void 0,SNAKES = void 0;

function init() {
    cancelAnimationFrame(NEXTFRAME);

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    SNAKES = new Array(COUNT).fill().map(function () {
        var length = Math.random() * 40 + 40;
        return {
            x: Math.random() * WIDTH,
            y: Math.random() * (HEIGHT - 2 * PADDING) + PADDING,
            length: length,
            period: length,
            amplitude: length * 0.5,
            speed: Math.random() * 1 + 1 };

    });

    WRAPPER.innerHTML = '';
    WRAPPER.appendChild(canvas);

    ctx.lineCap = 'round';
    ctx.lineWidth = SIZE;
    ctx.strokeStyle = COLOR;

    draw();
}

function draw() {
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = BGCOLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.globalAlpha = 1;

    var snake = void 0;

    for (var i = 0; i < COUNT; i++) {
        snake = SNAKES[i];
        snake.x += snake.speed;

        if (snake.x > WIDTH) {
            snake.x = -snake.length;
        }

        ctx.beginPath();
        ctx.moveTo(snake.x, snake.y + Math.sin(snake.x / snake.period) * snake.amplitude);

        for (var dx = 0, dy; dx < snake.length; dx += PRECISION) {
            dy = Math.sin((dx + snake.x) / snake.period) * snake.amplitude;
            ctx.lineTo(snake.x + dx, snake.y + dy);
        }

        ctx.stroke();
    }

    NEXTFRAME = requestAnimationFrame(draw);
}

window.onresize = init;

init();