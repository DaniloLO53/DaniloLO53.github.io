canvas = document.getElementById("menu2");
ctx = canvas.getContext("2d");


// ctx.beginPath();
// ctx.lineWidth = 100;
// ctx.arc(0, 0, 200, 0, 0.5*Math.PI);
// ctx.strokeStyle = "rgba(0,220,180,0.5)";
// ctx.filter = "blur(4px)"
// ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 100;
ctx.arc(400, 0, 200, 0.5*Math.PI, 1*Math.PI);
ctx.strokeStyle = "rgba(0,220,180,0.1)";
ctx.filter = "blur(4px)"
ctx.stroke();