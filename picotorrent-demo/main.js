$('document').ready(function(){
  setInterval(function(){
    document.getElementsByClassName("progress-bar-progress")[0].style.width=Math.random()*100+"%";
  },500)
});
