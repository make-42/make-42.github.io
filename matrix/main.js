var delay = 10;
function spawnparticle(){
var particle= document.createElement("div");
particle.innerHTML=Math.random().toString(36).slice(2)[1];
particle.className="matrix-letters";
particle.style.left=Math.round(Math.random()*57)*1.7+"vw"
 document.getElementsByClassName("matrix-widget")[0].appendChild(particle);
 setTimeout(function(object){
   object.remove();
 },1000,particle);
}
var intervalparticles;
$(document).ready(function(){
  intervalparticles = setInterval(spawnparticle,delay)
})
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 37){
    delay*=1.5;
  } else if(event.keyCode == 39){
    delay/=1.5;
  }
  else{
    return 0;
  }
  clearInterval(intervalparticles)
  intervalparticles = setInterval(spawnparticle,delay);
})
