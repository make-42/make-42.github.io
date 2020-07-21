let drag = 1.25;
let layer1speed=0.5;
let layer2speed=0.75;
let layer3speed=1;

/* System Varibles*/
let position = 0;
let velocity = 1;
let oldposition = 0;
setInterval(function() {
  position += velocity;
  velocity = Math.round(velocity/drag)+(window.scrollY-oldposition);
  document.getElementsByClassName("layer1")[0].style.backgroundPositionY=position*layer1speed+"px";
  document.getElementsByClassName("layer2")[0].style.backgroundPositionY=position*layer2speed+"px";
  document.getElementsByClassName("layer3")[0].style.backgroundPositionY=position*layer3speed+"px";
  oldposition = window.scrollY;
},50);
