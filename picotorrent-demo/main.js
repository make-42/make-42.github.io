darkmode = true;

function toggleDarkMode(){
  if(darkmode){
    darkmode = !darkmode;
    document.body.style.setProperty('--background-color', "#FFF");
    document.body.style.setProperty('--text-color-light', "#000");
  } else{
    darkmode = !darkmode;
    document.body.style.setProperty('--background-color', "#222");
    document.body.style.setProperty('--text-color-light', "white");
  }
}


$('document').ready(function(){
  setInterval(function(){
    document.getElementsByClassName("progress-bar-progress")[0].style.width=Math.random()*100+"%";
  },500)
});
