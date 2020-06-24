// Skill Score List
var scores = ["100%", "95%", "92%", "78%", "77%", "76%", "74%", "100%", "100%", "60%"];
var filters = "hue-rotate(0deg)";
$(document).ready(function() {
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[0].style.width = scores[0];
        document.getElementsByClassName("resume-skill-rating")[0].style.filter = filters;
    }, 0);
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[1].style.width = scores[1];
        document.getElementsByClassName("resume-skill-rating")[1].style.filter = filters;
    }, 50);
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[2].style.width = scores[2];
        document.getElementsByClassName("resume-skill-rating")[2].style.filter = filters;
    }, 100);
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[3].style.width = scores[3];
        document.getElementsByClassName("resume-skill-rating")[3].style.filter = filters;
    }, 150);
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[4].style.width = scores[4];
        document.getElementsByClassName("resume-skill-rating")[4].style.filter = filters;
    }, 200);
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[5].style.width = scores[5];
        document.getElementsByClassName("resume-skill-rating")[5].style.filter = filters;
    }, 250);
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[6].style.width = scores[6];
        document.getElementsByClassName("resume-skill-rating")[6].style.filter = filters;
    }, 300);
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[7].style.width = scores[7];
        document.getElementsByClassName("resume-skill-rating")[7].style.filter = filters;
    }, 350);
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[8].style.width = scores[8];
        document.getElementsByClassName("resume-skill-rating")[8].style.filter = filters;
    }, 400);
    setTimeout(function() {
        document.getElementsByClassName("resume-skill-rating")[9].style.width = scores[9];
        document.getElementsByClassName("resume-skill-rating")[9].style.filter = filters;
    }, 450);
});
