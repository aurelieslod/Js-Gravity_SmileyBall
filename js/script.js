var posX = 0;
var posY = 0;
var vx = 5;
var vy = 0;
var ay = .3; //gravity
var radius = 30;

var ang = 0 //angle
var vr = 2; //vitesse de rotation


var areaW= 700;
var areaH = 450;

var ball = document.getElementById("balle");
var ballshape = document.getElementById("ballshape");

setInterval(update, 1000/60);
function update(){
  vy += ay;
  posX += vx;
  posY += vy;

  if(posY >= areaH-30){
    vy *= -1;
    posY = areaH -30;
    vr = vx;
  }
  if(posX >= areaW -30){
    vx *= -1;
    vr = vy;
  }
    if(posX <= 30){
    vx *= -1;
    posX = 30;
    vr = vy;
  }
  else if(posY <= 30){
    vy *= -1;
    posY = 30;
  }
  ball.style.left = posX + "px";
  ball.style.top = posY + "px";
  // console.log(vy);
  //
  ang += vr;
  ballshape.style.transform = "rotate(" + ang + "deg)";

  document.onkeypress = function(e){
    if(e.keyCode == "37"){
      vx += -5;
    }
    if(e.keyCode == "39"){
      vx += 5;
    }
    if(e.keyCode == "38"){
      vy += -5;
    }
    if(e.keyCode == "40"){
      vy += 5;
    }
  }

}

document.onkeypress = function(e){
    console.log(e.keyCode);
  }
