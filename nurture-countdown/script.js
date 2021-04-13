var noisescale = 1000;


var linex = 0;
var liney = 0;
var canvaswidth = 800;
var canvasheight = 450;


function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function getTimeRemaining(endtime){
  const total = Date.parse(endtime)-new Date();
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
var timeremaining = getTimeRemaining("23 April 2021 00:00:00");
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
    document.getElementsByClassName("seconds")[0].style.fontSize=(40*a)+"px";
  }}}} else{
    document.getElementsByClassName("seconds")[0].style.fontSize=(40*a)+"px";
  }
},100);

setInterval(function(){
  if (canvaswidth == window.innerWidth/2){
    return;
  }
  if (canvasheight == window.innerHeight/2){
    return;
  }
  canvaswidth=window.innerWidth/2;
  canvasheight=window.innerHeight/2;
  document.getElementsByTagName("canvas")[0].width = canvaswidth;
  document.getElementsByTagName("canvas")[0].height = canvasheight;
},1000)


var strokecolor = "white"
noise.seed(Math.random());
setInterval(function(){
  var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
  ctx.strokeStyle = strokecolor;
  sinnoise = noise.simplex2((new Date().getTime()+10000)/noisescale, 0)
  linex = canvaswidth/2+(noise.simplex2(new Date().getTime()/noisescale, 0)*noise.simplex2((new Date().getTime()+10000)/noisescale, 0)*canvaswidth/1.5)
  liney = canvasheight/2+(noise.simplex2(0, new Date().getTime()/noisescale)*noise.simplex2(0, (new Date().getTime()+10000)/noisescale)*canvasheight/1.5)
  ctx.lineTo(linex,liney);
  ctx.stroke();
  if (Math.floor(Math.random() * 200) == 0){
    ctx.closePath();
    ctx.clearRect(0, 0, canvaswidth, canvasheight);
    ctx.beginPath();
    if (strokecolor == "white"){
      strokecolor = "black"
      document.getElementsByTagName("canvas")[0].style.background = "white";
    } else {
      strokecolor = "white"
      document.getElementsByTagName("canvas")[0].style.background = "black";
    }
  }
},53.7)

function tickercycle(){
document.getElementsByClassName("title-ticker")[0].style = "text-indent: -4000px;";
setTimeout(function(){
document.getElementsByClassName("title-ticker")[0].style = "text-indent: 100vw;";
},10000)
}


tickercycle();
setInterval(tickercycle,20000)
