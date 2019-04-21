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

var shoot = [];
shoot[0] = {
  x: xPos,
  y: yPos
}

var xPos = 100;
var yPos = 150;

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
}

ctx.drawImage(shuttle, xPos, yPos);

requestAnimationFrame(draw);
}

asteroid.onload = draw;
