var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bg = new Image();
var asteroid = new Image();
var shuttle = new Image();
var fireball = new Image();

bg.src = "img/background.jpg";
asteroid.src = 'img/asteroid.jpg'
shuttle.src = 'img/shuttle.png'
fireball.src = 'img/fireball.png'

document.addEventListener("contextmenu", moveDown);
document.addEventListener("click", moveUp );

function moveUp(){
  yPos -= 20;
}

function moveDown(){
  yPos += 20;
}

var ast = [];
ast[0] = {
  x: cvs.width,
  y: 100
}

var xPos = 100;
var yPos = 150;

var shoot = [];
shoot[0] = {
  x: xPos ,
  y: yPos+ 17
}


function draw() {
 ctx.drawImage(bg, 0, 0);

for(var i=0; i<ast.length; i++){
  ctx.drawImage(asteroid,ast[i].x, ast[i].y)
  ast[i].x--;
//var pos = Math.floor(Math.random()*cvs.width)
if (ast[i].x == 400){
 ast.push({
   x: cvs.width,
   y: Math.floor(Math.random()*cvs.height)
 });
}

if (xPos + shuttle.width >= ast[i].x &&
   xPos < ast[i].x + asteroid.height &&
   yPos + shuttle.height >= ast[i].y &&
    yPos <= ast[i].y + asteroid.height) {
  location.reload()
}
}

for(var i=0; i<shoot.length; i++){
  ctx.drawImage(fireball,shoot[i].x, shoot[i].y)
  shoot[i].x++;

  if (shoot[i].x == 120){
   shoot.push({
     x: xPos,
     y: yPos + 17
   });
  }

 }


ctx.drawImage(shuttle, xPos, yPos);

requestAnimationFrame(draw);
}

asteroid.onload = draw;
