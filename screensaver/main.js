
/* Simulation Params */
noise.seed(Math.random());

/* Canvas Params*/
canvas_scale = 200;
framerate = 10;
spacing = 40;
linewidth = 10;
linelength = 5;
noisescale = 0.1628125;
timescale = 0.005;
hslscale = 10;
var starttime = + new Date();
function update_canvas(){
  var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, canvas_width, canvas_height);
var currtime = + new Date();
for (let i = 0; i < Math.floor(canvas_width/spacing); i++) {
  for (let j = 0; j < Math.floor(canvas_height/spacing); j++) {
    x = noise.perlin2(i*noisescale,currtime*timescale*noisescale);
    y = noise.perlin2(j*noisescale,currtime*timescale*noisescale+100000000);
    for (let w = 0; w < linelength*2; w++) {
    ctx.beginPath();
    posx = i*spacing+x*linelength*w+spacing/2
    posy = j*spacing+y*linelength*w+spacing/2
    leng = Math.sqrt(Math.pow(posx,2)+Math.pow(posy,2))
    lengfromcent =  Math.sqrt(Math.pow(x*linelength*w,2)+Math.pow(y*linelength*w,2))
    ctx.fillStyle = 'hsla('+(((currtime-starttime)/hslscale)+leng)+'deg,100%,60%,'+lengfromcent*4+'%)';
    ctx.arc(posx,posy,linewidth,0,2*Math.PI);
    ctx.fill();
  }

}}

}

function update_canvas_dimensions(){
  if (canvas_width==window.innerWidth){
    return;
  }
  if (canvas_height==window.innerHeight){
    return;
  }
  var c = document.getElementById("canvas");
  canvas_width=window.innerWidth;
  canvas_height=window.innerHeight;
  center_x = canvas_width/2;
  center_y = canvas_height/2;
  c.width = canvas_width;
  c.height = canvas_height;
}
var canvas_width = 0;
var canvas_height = 0;
var center_x = 0;
var center_y = 0;
function main(){
  update_canvas_dimensions();
  update_canvas();
}
main()
setInterval(update_canvas,framerate);
setInterval(update_canvas_dimensions,1000);
