var tzoffset = 1;

function itime(){
  /* Code go brrrrrrrrrrrrrr...*/
  currdatetime = new Date()
  currseconds = currdatetime.getSeconds()
  currminutes = currdatetime.getMinutes()
  currhours = currdatetime.getHours()-tzoffset;
  currmilliseconds = currdatetime.getMilliseconds()
  return ((currhours*3600+currminutes*60+currseconds+currmilliseconds/1000) / 86.4);
}


setInterval(function(){
  document.getElementsByClassName("time")[0].innerHTML = "@"+(Math.round(itime() * 10000) / 10000).toFixed(4);
},20)
