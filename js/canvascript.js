// 8/6/20
// HTML5 Canvas element play
// canvascript.js

function diagonalLine () {

    var c = document.getElementById("myCanvasDiagonal");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
}

function drawCircle () {

    var c = document.getElementById("myCanvasCircle");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

}

