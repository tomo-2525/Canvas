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

function changeWidth() {
    penWidth = document.getElementById("penW").value;

    var canvasWidth = document.getElementById("canvasWidth");
    var contextWidth = canvasWidth.getContext("2d");

    cantextWidth.clearRect(0, 0, 20, 20);
    contextWidth.beginPath();
    contextWidth.arc(10, 10, penWidth / 2, 2 * Math.PI, false);
    contextWidth.fill();
}


function setColor(r, g, b) {
    document.getElementById("penR").value = r;
    document.getElementById("penG").value = g;
    document.getElementById("penB").value = b;
    changeColor();
}

function changeColor() {
    var penR = document.getElementById("penR").value;
    var penG = document.getElementById("penG").value;
    var penB = document.getElementById("penB").value;
    var penA = document.getElementById("penA").value;

    penColor = "rgba(" + penR + ", " + penG + ", " + penB + ", " + penA + ")";

    var canvasColor = document.getElementById("canvasColor");
    var contextClor = canvasColor.getContext("2d");

    contextClor.clearRect(0, 0, 20, 20);
    contextClor.fillStyle = penColor;
    contextClor.fillRect(0, 0, 20, 20);

    var textColor = document.getElementById("textColor");
    textColor.innerHTML = "R : " + penR + ", G :" + penG + ", B :" + penB + ", A :" + penA;
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

function clearCanvas() {
    var canvas = document.getElementById("main");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height)
}

function showImage() {
    var canvas = document.getElementById("main");
    var imageWin = window.open("", "");

    imageWin.document.open();
    imageWin.document.write('<html>')
    imageWin.document.write('<head><title>お絵かき</title></head>');
    imageWin.document.write('<body>')
    imageWin.document.write('<img src="' + canvas.toDataURL() + '">');
    imageWin.document.write('</body></html>');
    imageWin.document.close();
}