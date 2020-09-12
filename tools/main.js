var state = false;
var promise;
var startdate = Date.now();

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

function togglestopwatch() {
	if (!state){
		document.getElementsByClassName("stopwatch-button")[0].innerHTML = "Stop";
		state=true;
		startdate = Date.now();
		promise = setInterval(updatestopwatch,1000/60);
		promiseclock = setInterval(updatestopwatchclock,1000/10);
	} else{
		clearInterval(promise)
		clearInterval(promiseclock)
		document.getElementsByClassName("stopwatch-button")[0].innerHTML = "Start";
		state=false;
	}
}

function updatestopwatchclock() {
	var seconds = (Date.now()-startdate)/1000*360
	var minutes = (Date.now()-startdate)/1000/60*360
	var hours = (Date.now()-startdate)/1000/60/60*360
	document.getElementsByClassName("stopwatch-seconds")[0].style.transform = "rotate("+String(seconds)+"deg)";
	document.getElementsByClassName("stopwatch-minutes")[0].style.transform = "rotate("+String(minutes)+"deg)";
	document.getElementsByClassName("stopwatch-hours")[0].style.transform = "rotate("+String(hours)+"deg)";
};

function updatestopwatch() {
	var secondssincestart = String((Date.now()-startdate)/1000)
	var paddedseconds = String(((Date.now()-startdate)/1000).toFixed(5))
	document.getElementsByClassName("stopwatch-time")[0].innerHTML = secondssincestart.toHHMMSS()+paddedseconds.slice(paddedseconds.length-6, paddedseconds.length-2);
};