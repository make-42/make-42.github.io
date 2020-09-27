var words = 10;
var wordlist = ["beans","i","love"];
var testtarget = "";
var testposition = 0;
var testlength = 0;
var teststartdate = 0;

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

function displayresults(){
  var typingresults = document.getElementsByClassName("typing-results")[0]
  typingresults.innerHTML="WPM: "+Math.round((testposition/testlength*words/((Date.now()-teststartdate)/60000)))+"<br>Time: 00:00:00"
}

function setuptypingtest(){
  testtarget = "";
  testposition = 0;
  var typingwords = document.getElementsByClassName("typing-words")[0]
  typingwords.innerHTML="";
  var i;
  for (i = 0; i < words; i++) {
    word = wordlist.sample()
    var j;
    for (j = 0; j < word.length; j++) {
      typingwords.innerHTML+="<span class=\"typing-letter-unconfirmed\">"+word[j]+"</span>"
}
if(i<words-1){
  testtarget+=word+" ";
  typingwords.innerHTML+="<span class=\"typing-letter-unconfirmed\">&nbsp;</span>"
} else{
  testtarget+=word;
}
}
testlength = testtarget.length-1
}


$(document).ready(function(){
setuptypingtest();
});

document.addEventListener('keydown', function(event) {
  var typingwords = document.getElementsByClassName("typing-words")[0]
  if (testposition == 0){
    teststartdate = Date.now();
  }
  if (String.fromCharCode(event.keyCode).toLowerCase() == testtarget[testposition]){
    typingwords.children[testposition].className = "typing-letter-confirmed";
    testposition++;
  } else{
    typingwords.children[testposition].className = "typing-letter-error";
    testposition++;
  }
  displayresults()
  if(testposition==testlength){
    console.log("test end")
  }
})
