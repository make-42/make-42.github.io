// Skill Score List
scores = ["60%","55%","35%","35%","25%","60%","60%","20%","0%"]

$(document).ready(function() {
  setTimeout(function(){document.getElementsByClassName("resume-skill-rating")[0].style.width = scores[0];},0);
  setTimeout(function(){document.getElementsByClassName("resume-skill-rating")[1].style.width = scores[1];},50);
  setTimeout(function(){document.getElementsByClassName("resume-skill-rating")[2].style.width = scores[2];},100);
  setTimeout(function(){document.getElementsByClassName("resume-skill-rating")[3].style.width = scores[3];},150);
  setTimeout(function(){document.getElementsByClassName("resume-skill-rating")[4].style.width = scores[4];},200);
  setTimeout(function(){document.getElementsByClassName("resume-skill-rating")[5].style.width = scores[5];},250);
  setTimeout(function(){document.getElementsByClassName("resume-skill-rating")[6].style.width = scores[6];},300);
  setTimeout(function(){document.getElementsByClassName("resume-skill-rating")[7].style.width = scores[7];},350);
  setTimeout(function(){document.getElementsByClassName("resume-skill-rating")[8].style.width = scores[8];},400);
});
