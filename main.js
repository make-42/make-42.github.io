// Set Variables For Typing Effect
var fpstext = 15;
var fpscursor = 1;
var sitetitles = ["Louis Dalibard's website", "cd ~/Apps/OpenNotes", "techadvancedcyborg.github.io", "Work in progress...", "cd ~/Apps/TTACT-s-Anime-Player-Revamped", "Why did the chicken cross the road?", "Beans!", "\“Fix the cause, not the symptom.\” – Steve Maguire", "\“Talk is cheap. Show me the code.\” ― Linus Torvalds","Justice for George Floyd.","\“I can\'t breathe...\” ― George Floyd"]
//System Variables
var slice = 0;
var typing = true;
var sitetitle = sitetitles[Math.round((window.crypto.getRandomValues(new Uint32Array(1))[0]/4294967296) * (sitetitles.length - 1))]
var cursorstate = true;
//Text Rendering Loop
setInterval(function() {
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
        sitetitle = sitetitles[Math.round((window.crypto.getRandomValues(new Uint32Array(1))[0]/4294967296) * (sitetitles.length - 1))]
    }
}, 1000 / fpstext);
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
        now = new Date();
        birth = new Date("2007/02/12");
        //Calculate Differences
        diffsecs = Math.floor((now - birth) / 1000);
        diffdays = Math.floor((now - birth) / (1000 * 3600 * 24));
        //Render Text
        document.getElementsByClassName("age")[0].innerHTML = diffdays.toString() + " days or " + diffsecs.toString() + " seconds old.";
    } catch (e) {
        //Catch Error (if element is not loaded yet)
        console.log("error");
        console.log(e.toString());
    }
}, 1000);

//On Page Finish Loading
$(document).ready(function() {
    //Add badges to projects and make the images clickable
    var i;
    //Loop Through Every Element With "project" Class
    for (i = 0; i < document.getElementsByClassName("project").length; i++) {
        //Get Current Element
        var projectelement = document.getElementsByClassName("project")[i];
        //Get Github Project Name
        var projectname = projectelement.getAttribute("project-name");
        //Make clickable
        projectelement.setAttribute("href", "https://github.com/TechAdvancedCyborg/" + projectname);
        /* Add language badge */
        var languagebadge = document.createElement("img");
        languagebadge.setAttribute("src", "https://img.shields.io/github/languages/top/TechAdvancedCyborg/" + projectname);
        languagebadge.style.position = "absolute";
        languagebadge.style.bottom = "1vw";
        languagebadge.style.left = 0;
        languagebadge.style.borderRadius = "2vw";
        projectelement.appendChild(languagebadge);
        /* Add repo size badge */
        var lastcommitbadge = document.createElement("img");
        lastcommitbadge.setAttribute("src", "https://img.shields.io/github/last-commit/TechAdvancedCyborg/" + projectname);
        lastcommitbadge.style.position = "absolute";
        lastcommitbadge.style.bottom = "1vw";
        lastcommitbadge.style.right = 0;
        lastcommitbadge.style.borderRadius = "2vw";
        projectelement.appendChild(lastcommitbadge);
    }
    //Set Stats Text
    statselement = document.getElementsByClassName("stats")[0]
    statselement.innerHTML = navigator.userAgent + "<br>"
    statselement.innerHTML = statselement.innerHTML + navigator.hardwareConcurrency + " cores <br>";
    statselement.innerHTML = statselement.innerHTML + navigator.language + "<br>";
});
