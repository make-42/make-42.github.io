function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  if(total < 0){
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var days = 0;
  } else {
    var seconds = Math.floor( (total/1000) % 60 );
  var minutes = Math.floor( (total/1000/60) % 60 );
  var hours = Math.floor( (total/(1000*60*60)) % 24 );
  var days = Math.floor( total/(1000*60*60*24) );
  }


  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
setInterval(function(){
var timeremaining = getTimeRemaining("Monday, 27 December 2027, 12:00:00");
document.getElementsByClassName("days")[0].innerHTML = ('0' +time:remaining.days).slice(-2)+":";
  document.getElementsByClassName("hours")[0].innerHTML = ('0' +timeremaining.hours).slice(-2)+":";
  document.getElementsByClassName("minutes")[0].innerHTML = ('0' +timeremaining.minutes).slice(-2)+":";
  document.getElementsByClassName("seconds")[0].innerHTML = ('0' +timeremaining.seconds).slice(-2);
  var a = 1;
  if (timeremaining.days == 0){
    a++;
    document.getElementsByClassName("days")[0].style.fontSize=0;
  } else{
    document.getElementsByClassName("days")[0].style.fontSize=(40*a)+"px";
  }
  if (timeremaining.hours == 0){
        if (timeremaining.days == 0){
    a++;
    document.getElementsByClassName("hours")[0].style.fontSize=0;
  }} else{
    document.getElementsByClassName("hours")[0].style.fontSize=(40*a)+"px";
  }
  if (timeremaining.minutes == 0){
    if (timeremaining.hours == 0){
        if (timeremaining.days == 0){
    a++;
    document.getElementsByClassName("minutes")[0].style.fontSize=0;
  }}} else{
    document.getElementsByClassName("minutes")[0].style.fontSize=(40*a)+"px";
  }
  if (timeremaining.seconds == 0){
    if (timeremaining.minutes == 0){
      if (timeremaining.hours == 0){
        if (timeremaining.days == 0){
    a++;
    document.getElementsByClassName("seconds")[0].style.fontSize=(40*a)+"px";
  }}}} else{
    document.getElementsByClassName("seconds")[0].style.fontSize=(40*a)+"px";
  }
},100);
