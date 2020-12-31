function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
setInterval(function(){
var timeremaining = getTimeRemaining("1 January 2021 00:00:00");
document.getElementsByClassName("days")[0].innerHTML = ('0' +timeremaining.days).slice(-2)+":";
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
    document.getElementsByClassName("seconds")[0].style.fontSize=0;
  }}}} else{
    document.getElementsByClassName("seconds")[0].style.fontSize=(40*a)+"px";
  }
},100);