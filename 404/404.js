codelines = ["Eeeeekkk!", "What are you doing here?", "Oh!", "Hi!", "Welcome to the void!", "Let's chill here together for a while... <3"];
cursor = "";
var chrname = "[????]"

$(document)
    .ready(function() {
        slice = 0;
        lineindex = 0;
        state = false;
        currentcodeline = codelines[lineindex]
        setInterval(function() {
            document.getElementById("terminal-text").innerHTML = chrname+"<br>" + currentcodeline.slice(0, slice) + cursor
            if (slice - 1 != currentcodeline.length) {
                if (slice - 1 == 0) {
                    if (state) {
                        lineindex++;
                        currentcodeline = codelines[lineindex]
                        state = false;
                    }
                }
                if (state == true) {
                    slice--;
                } else {
                    slice++;
                }
            } else {
                if (lineindex + 1 == codelines.length) {} else {
                    state = !state;
                    slice--;
                }
            }
        }, 30);
        setInterval(function() {
            if (cursor == "") {
                cursor = "_";
            } else {
                cursor = "";
            }
        }, 500);

    // Suki Easter Egg
    var chrstate = 0;
    var chrdiscovered = false;
    document.addEventListener('keydown', function(event) {
      switch (chrstate) {
      case 0:
	if(!chrdiscovered){
        if (event.keyCode == 83){
          chrstate++;
          chrname="[S???]";
        } else{
          chrstate = 0;
chrname="[????]";
        }}
      break;
      case 1:
if(!chrdiscovered){
        if (event.keyCode == 85){
          chrstate++;
          chrname="[Su??]";
        } else{
          chrstate = 0;
chrname="[????]";
        }}
      break;
      case 2:
if(!chrdiscovered){
        if (event.keyCode == 75){
          chrstate++;
	  chrname="[Suk?]";
        } else{
          chrstate = 0;
chrname="[????]";
        }}
      break;
      case 3:
	if(!chrdiscovered){
        if (event.keyCode == 73){
    	  chrname="[Suki]";
          console.log("Ehh! How do you know my name? Weirdo...")
          codelines.push("Ehh! How do you know my name? Weirdo...")
          chrstate = 0;
	  chrdiscovered = true;
        } else{
          chrstate = 0;
chrname="[????]";
        }}
        break;
      }
  });

  // Konami Easter Egg
  var konamistate = 0;
  document.addEventListener('keydown', function(event) {
    switch (konamistate) {
    case 0:
    if (event.keyCode == 38){
      konamistate++;
    } else{
      konamistate = 0;}
    break;
    case 1:
    if (event.keyCode == 38){
      konamistate++;
    } else{
      konamistate = 0;}
    break;
    case 2:
    if (event.keyCode == 40){
      konamistate++;
    } else{
      konamistate = 0;}
    break;
    case 3:
    if (event.keyCode == 40){
      konamistate++;
    } else{
      konamistate = 0;}
    break;
    case 4:
    if (event.keyCode == 37){
      konamistate++;
    } else{
      konamistate = 0;}
    break;
    case 5:
    if (event.keyCode == 39){
      konamistate++;
    } else{
      konamistate = 0;}
    break;
    case 6:
    if (event.keyCode == 37){
      konamistate++;
    } else{
      konamistate = 0;}
    break;
    case 7:
    if (event.keyCode == 39){
      konamistate++;
    } else{
      konamistate = 0;}
    break;
    case 8:
    if (event.keyCode == 66){
      konamistate++;
    } else{
      konamistate = 0;}
    break;
    case 9:
    if (event.keyCode == 65){
      window.location.href = "https://techadvancedcyborg.github.io/snake/";
    } else{
      konamistate = 0;}
    break;

  }
  });
});
