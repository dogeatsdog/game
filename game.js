var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bg = new Image();
var asteroid = new Image();
var shuttle = new Image();
let fireball = new Image();
let exploded = new Image()

bg.src = "img/background.jpg";
asteroid.src = 'img/asteroid.jpg'
shuttle.src = 'img/shuttle.png'
fireball.src = 'img/fireball.png'
exploded.src = 'img/fireball.png'


document.addEventListener("keydown", move);

function move(event) {
  if (event.key === 'ArrowUp'){
    event.preventDefault()
    moveUp()
  } else if (event.key === 'ArrowDown'){
    event.preventDefault()
    moveDown()
  }
}


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
  x: xPos,
  y: yPos+ 17
}


function draw() {
 ctx.drawImage(bg, 0, 0);

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



for(var i=0; i<ast.length; i++){
  ctx.drawImage(asteroid,ast[i].x, ast[i].y)
  ast[i].x--;
var pos = Math.floor(Math.random()*cvs.width)
if (ast[i].x == 400){
 ast.push({
   x: cvs.width,
   y: Math.floor(Math.random()*cvs.height)
 });
 console.log(ast)
}

if (xPos + shuttle.width >= ast[i].x &&
   xPos < ast[i].x + asteroid.height &&
   yPos + shuttle.height >= ast[i].y &&
    yPos <= ast[i].y + asteroid.height) {
  location.reload()
}
for(var j=0; j<shoot.length;j++){
  if (shoot[j].x + fireball.width - 8 >= ast[i].x &&
     shoot[j].x  < ast[i].x + asteroid.height &&
     shoot[j].y + fireball.height >= ast[i].y &&
      shoot[j].y <= ast[i].y + asteroid.height) {
      ast.splice(i,1) }

}

}



ctx.drawImage(shuttle, xPos, yPos);

requestAnimationFrame(draw);
}

asteroid.onload = draw;
