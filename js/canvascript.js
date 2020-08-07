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

function drawText() {

    var c = document.getElementById("myCanvasText");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Canvas Play!", 10, 50);
}

function drawStrokeText() {

    var c = document.getElementById("myCanvasStrokeText");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Canvas Play!", 10, 50);
}

function drawLinearGradient() {

    var c = document.getElementById("myCanvasLinearGradient");
    var ctx = c.getContext("2d");
    
    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");
    
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 175, 80);
}

function drawImage() {

    // use: https://www.w3schools.com/html/img_the_scream.jpg

    var c = document.getElementById("myCanvasDrawImage");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    // var img = src="https://www.w3schools.com/html/img_the_scream.jpg";
    ctx.drawImage(img, 10, 10);
}

function drawImageAgain() {

    // use: https://www.w3schools.com/html/img_the_scream.jpg

    // var c = document.getElementById("myCanvasDrawImageAgain");
    // var ctx = c.getContext("2d");
    // // var img = document.getElementById("scream");
    // var img = src="https://www.w3schools.com/html/img_the_scream.jpg";
    // ctx.drawImage(img, 10, 10);

    var c = document.getElementById("myCanvasDrawImageAgain");
    var ctx = c.getContext("2d");
    
    var imgPic = document.createElement("img");
    // imgPic.src = "https://www.w3schools.com/html/img_the_scream.jpg";
    imgPic.setAttribute("src", "https://www.w3schools.com/html/img_the_scream.jpg");
    imgPic.setAttribute("alt", "image");
    imgPic.height = 277;
    imgPic.width  = 220;




    ctx.drawImage(imgPic, 10, 10);
}
