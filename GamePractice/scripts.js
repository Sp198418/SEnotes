console.log('Hello Canvas')
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// // Draw line
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();


// //Draw circle
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

ctx.font = "50px Arial";
ctx.fillStyle = "white"
ctx.fillText("Hello World", c.width/2 - 125, (c.height/2)+25);