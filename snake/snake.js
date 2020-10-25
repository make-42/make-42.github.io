var angle = 1
var positions = [[20,15],[21,15],[22,15],[23,15],[24,15]];
function drawframe() {
  document.getElementById("snake-window").innerHTML="";
  var i;
for (i = 0; i < positions.length; i++) {
        var divelement = document.createElement("div");
        divelement.className="snake-pixel"
        divelement.style.left = positions[i][0]+"vw";
        divelement.style.top = positions[i][1]+"vw";
        document.getElementById("snake-window").appendChild(divelement);}
}

function gameover(){
  alert("GAME OVER");
  positions = [[20,15],[21,15],[22,15],[23,15],[24,15]];
}

function updatesnake() {
  newpositions = [];
  var i;
for (i = 0; i < positions.length-1; i++) {
  newpositions.push(positions[i+1])
}
switch (angle) {
case 0:
  vector = [0,0-1];
break;
case 1:
  vector = [1,0];
break;
case 2:
  vector = [0,1];
break;
case 3:
  vector = [0-1,0];
break;
}
newpositions.push([positions[positions.length-1][0]+vector[0],positions[positions.length-1][1]+vector[1]])
positions = newpositions;
if (newpositions[newpositions.length-1][0] > 39){
  gameover();
}
if (newpositions[newpositions.length-1][0] < 0){
  gameover();
}
if (newpositions[newpositions.length-1][1] > 29){
  gameover();
}
if (newpositions[newpositions.length-1][1] < 0){
  gameover();
}
}
$(document)
    .ready(function() {
      setInterval(function(){
        updatesnake();
        drawframe();
      },200);
      document.addEventListener('keydown', function(event) {
        switch (event.keyCode) {
        case 38:
          angle = 0;
        break;
        case 39:
          angle = 1;
        break;
        case 40:
          angle = 2;
        break;
        case 37:
          angle = 3;
        break;
      }
});});