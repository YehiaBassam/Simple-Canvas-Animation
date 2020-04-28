var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
//arc(x,y,r,sAngle,eAngle,counterclockwise);
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle

ctx.fillStyle="black";
ctx.fill();
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.lineTo(110, 75);

ctx.fillStyle="white";   // white Teeth
ctx.fillRect(58,75,15,15);
ctx.fillRect(76,75,15,15);

ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye

ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye

ctx.fillStyle="yellow";
ctx.fill();
ctx.stroke();
