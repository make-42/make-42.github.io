// Set Variables For Typing Effect
var fpstext = 20;
var fpscursor = 1;
var sitetitles = ["cd ~/Apps/NekoVault", "firefox techadvancedcyborg.github.io", "echo Converting caffeine to code...", "cd ~/Apps/TTACT-s-Anime-Player-Revamped", "echo Why did the chicken cross the road?", "echo \“Fix the cause, not the symptom.\” – Steve Maguire", "echo \“Talk is cheap. Show me the code.\” ― Linus Torvalds", "echo Justice for George Floyd.", "echo \“I can\'t breathe...\” ― George Floyd", "ping 1.1.1.1"]
//System Variables
var slice = 0;
var typing = true;
var sitetitle = sitetitles[Math.round((window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296) * (sitetitles.length - 1))]
var cursorstate = true;
//Text Rendering Loop
function updatetypingeffect() {
    //Set Cursor String Accordingly
    cursor = " ";
    if (cursorstate) {
        cursor = "_";
    }
    //Type
    if (typing) {
        //Set text in page
        document.getElementsByClassName("typing-text")[0].innerHTML = "> " + sitetitle.slice(0, slice) + cursor;
        //Set title text
        document.getElementsByTagName('title')[0].innerHTML = "> " + sitetitle.slice(0, slice) + cursor;
        slice++;
    }
    //Delete
    else {
        //Set text in page
        document.getElementsByClassName("typing-text")[0].innerHTML = "> " + sitetitle.slice(0, slice) + cursor;
        //Set title text
        document.getElementsByTagName('title')[0].innerHTML = "> " + sitetitle.slice(0, slice) + cursor;
        slice += 0 - 1;
    }
    //Reverse When At End of String
    if (slice > sitetitle.length) {
        typing = false;
    }
    //Reverse When At Start of String
    if (slice < 1) {
        typing = true;
        sitetitle = sitetitles[Math.round((window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296) * (sitetitles.length - 1))]
    }
}
setInterval(updatetypingeffect, 1000 / fpstext);
//Cursor State Loop
setInterval(function() {
    //Reverse cursorstate variable
    if (cursorstate) {
        cursorstate = false;
    } else {
        cursorstate = true;

    }
}, 1000 / fpscursor);
// Days and Seconds Since DOB Render Loop
setInterval(function() {
    try {
        //Set Dates
        timezoneoffset = new Date().getTimezoneOffset()*60000
        now = new Date();
        birth = new Date("2007/02/13 00:00:00"); //Born within February 13 2007 00:00:00 to February 13 2007 01:00:00 UTC+00:00
		lastbirthday = new Date("2020/02/12")
		nextbirthday = new Date("2021/02/12")
        //Calculate Differences
        diffsecs = Math.floor((now - birth+timezoneoffset) / 1000);
        diffdays = Math.floor((now - birth+timezoneoffset) / (1000 * 3600 * 24));
		// Render Different Units Progress Bars
		/*
		birthdayprogress = (now-lastbirthday)/(nextbirthday-lastbirthday);
		birthdaytotaldays = (nextbirthday-lastbirthday)/86400000;
		birthdaymonthprogress = (birthdayprogress*12)-Math.floor(birthdayprogress*12);
		birthdaydayprogress = (birthdayprogress*birthdaytotaldays)-Math.floor(birthdayprogress*birthdaytotaldays);
		birthdayhourprogress = (birthdayprogress*birthdaytotaldays*24)-Math.floor(birthdayprogress*birthdaytotaldays*24);
		birthdayminuteprogress = (now.getSeconds()/60)-Math.floor(now.getSeconds()/60);
		document.getElementsByClassName("time-progress-minutes")[0].style.width = String(birthdayminuteprogress*100)+"%";
		document.getElementsByClassName("time-progress-hours")[0].style.width = String(birthdayhourprogress*100)+"%";
		document.getElementsByClassName("time-progress-days")[0].style.width = String(birthdaydayprogress*100)+"%";
		document.getElementsByClassName("time-progress-months")[0].style.width = String(birthdaymonthprogress*100)+"%";
		document.getElementsByClassName("time-progress-years")[0].style.width = String(birthdayprogress*100)+"%";
		*/

        //Render Text
        let informationelement = document.getElementById("information");
        let ageelement = document.getElementsByClassName("age")[0];

        stringage = diffdays.toString() + " days or " + diffsecs.toString() + " seconds old.";
        if (ageelement.innerHTML == ""){
        for (var i = 0; i < stringage.length; i++) {
  ageelement.innerHTML += "<span class=\"agestring\">"+stringage.charAt(i)+"</span>";
}
}else{
  for (var i = 0; i < stringage.length; i++) {
  if (ageelement.getElementsByClassName("agestring")[i].innerHTML != stringage[i]){
    document.getElementsByClassName("age")[0].children[i].innerHTML = stringage[i];
    document.getElementsByClassName("age")[0].children[i].style.padding="0px 10px 0px 10px";
  }
  else{
    document.getElementsByClassName("age")[0].children[i].style.padding="0%";
  }

}}
        var style = getComputedStyle(document.body);

        ageelement.style.color = style.getPropertyValue('--text-color-light');
        informationelement.style.transform = "none";
        informationelement.style.color = style.getPropertyValue('--text-color-light');
    } catch (e) {
        //Catch Error (if element is not loaded yet)
        console.log("error");
        console.log(e.toString());
    }
}, 200);
//On Page Finish Loading
    //Start Animation
    setTimeout(function() {
        document.getElementsByClassName("typing-text")[0].style.width = "98.7%";
    }, 1000);
    setTimeout(function() {
        document.getElementsByClassName("typing-text")[0].style.color = getComputedStyle(document.body).getPropertyValue('--text-color-light');
    }, 2000);

// Gnome Easter Egg
var state = 0;
var audio = new Audio('./assets/audio/gnome.webm');
document.addEventListener('keydown', function(event) {
  switch (state) {
  case 0:
    if (event.keyCode == 71){
      state++;
    } else{
      state = 0;
    }
  break;
  case 1:
    if (event.keyCode == 78){
      state++;
    } else{
      state = 0;
    }
  break;
  case 2:
    if (event.keyCode == 79){
      state++;
    } else{
      state = 0;
    }
  break;
  case 3:
    if (event.keyCode == 77){
      state++;
    } else{
      state = 0;
    }
  break;
  case 4:
    if (event.keyCode == 69){
      audio.play();
      document.getElementsByClassName("gnome-easter-egg")[0].style.transform = "translate(-4vw,-4vw)";
      setTimeout(function(){document.getElementsByClassName("gnome-easter-egg")[0].style.transform = "translate(-20vw,-20vw)";},200);
      state = 0;
    } else{
      state = 0;
    }
    break;
  }
});
