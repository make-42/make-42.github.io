setInterval(function() {
  document.getElementsByClassName("layer1")[0].style.backgroundPositionY=window.scrollY*0.5+"px";
  document.getElementsByClassName("layer2")[0].style.backgroundPositionY=window.scrollY*0.75+"px";
  document.getElementsByClassName("layer3")[0].style.backgroundPositionY=window.scrollY*1+"px";
},50);
