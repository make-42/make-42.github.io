// Skill Score List
scores = ["60%","55%","35%","35%","25%","60%","60%","20%"]

$(document).ready(function() {
  i = 0;
  for (skillrating of document.getElementsByClassName("resume-skill-rating")) {
    skillrating.style.width = scores[i];
    i++;
  }
});
