//マウスが押されているかどうかを調べる変数
var mouseDown = false;

var penX = 0;
var penY = 0;
var penColor = "rgba(0, 0, 0, 1)";
var penWidth = 10;

function startDraw(event) {
    mouseDown = true;
    penX = event.clientX;
    penY = event.clientY;
    // penX = event.offsetX;
    // penY = event.offsetY;
}

function draw(event) {
    if (mouseDown) {
        var canvas = document.getElementById("main");
        var context = canvas.getContext("2d");

        context.strokeStyle = penColor;
        context.lineWidth = penWidth;
        context.lineCap = "round";

        var x = event.clientX;
        var y = event.clientY;
        // var x = event.offsetX;
        // var y = event.offsetY;
        context.beginPath();
        context.moveTo(penX, penY);
        context.lineTo(x, y);
        context.stroke();

        penX = x;
        penY = y;
    }
}

function endDraw(event) {
    mouseDown = false;
}

function drawRect() {
    var canvas = document.getElementById("main");
    var context = canvas.getContext("2d");

    context.strokeStyle = "red";
    context.strokeRect(50, 50, 100, 180);

    context.fillStyle = "blue";
    context.fillRect(200, 50, 100, 180);
}

function drawLine() {
    var canvas = document.getElementById("main");
    var context = canvas.getContext("2d");

    context.strokeStyle = "red";

    context.beginPath();
    context.moveTo(350, 50);
    context.lineTo(600, 150);
    context.lineTo(400, 200);
    context.stroke();
}

function drawCircle() {
    var canvas = document.getElementById("main");
    var context = canvas.getContext("2d");

    context.strokeStyle = "red";

    context.beginPath();
    context.arc(200, 350, 80, 0, 2 * Math.PI, false);
    context.stroke();

    context.fillStyle = "blue";

    context.beginPath();
    context.arc(450, 350, 80, 0, 2 * Math.PI, false);
    context.fill();
}
