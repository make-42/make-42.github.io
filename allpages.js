setInterval(function() {
  document.getElementsByClassName("layer1")[0].style.backgroundPositionY=window.scrollY+"px";
  document.getElementsByClassName("layer2")[0].style.backgroundPositionY=window.scrollY*1.5+"px";
  document.getElementsByClassName("layer3")[0].style.backgroundPositionY=window.scrollY*2+"px";
},50);
