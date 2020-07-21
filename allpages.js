let position = 0;
let velocity = 0;
let oldposition = 0;
setInterval(function() {
  position += velocity;
  velocity = Math.round(velocity/2)+(window.scrollY-oldposition);
  document.getElementsByClassName("layer1")[0].style.backgroundPositionY=position*0.5+"px";
  document.getElementsByClassName("layer2")[0].style.backgroundPositionY=position*0.75+"px";
  document.getElementsByClassName("layer3")[0].style.backgroundPositionY=position*1+"px";
  oldposition = window.scrollY;
  console.log(velocity);
},50);
