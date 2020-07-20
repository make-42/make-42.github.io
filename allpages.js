setInterval(function() {
  document.getElementsByClass("layer1")[0].style.backgroundPositionY=window.scrollY+"px";
  document.getElementsByClass("layer2")[0].style.backgroundPositionY=window.scrollY*1.5+"px";
  document.getElementsByClass("layer3")[0].style.backgroundPositionY=window.scrollY*2+"px";
},50);
