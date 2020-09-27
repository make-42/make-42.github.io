var words = 10;
var wordlist = ["beans","i","love"];
var testtarget = "";
var testposition = 0;
var testlength = 0;
var teststartdate = 0;
var testerrors = 0;

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

function displayresults(){
  var typingresults = document.getElementsByClassName("typing-results")[0]
  typingresults.innerHTML="WPM: "+Math.round((testposition/testlength*words/((Date.now()-teststartdate)/60000)))+"<br>"
  typingresults.innerHTML+="Errors: "+testerrors+"<br>"
  typingresults.innerHTML+="Accuracy: "+Math.round((testposition+1-testerrors)/(testposition+1)*100)+"%<br>"
  typingresults.innerHTML+="Time: "+(((Date.now()-teststartdate)/1000).toString().toHHMMSS())
}

function setuptypingtest(){
  testtarget = "";
  testposition = 0;
  testerrors = 0;
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
testlength = testtarget.length
}


$(document).ready(function(){
setuptypingtest();
});

document.addEventListener('keydown', function(event) {
  if(testposition==testlength){
    console.log("test end")
    if (event.keyCode == 27){
      setuptypingtest();
    }
  } else{
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
    testerrors++;
  }
  displayresults()
}
})
