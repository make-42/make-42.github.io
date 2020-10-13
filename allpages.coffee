el = document.createElement('html')

### User Variables ###

###
let drag = 1.25;
let layer1speed = 0.5;
let layer2speed = 0.75;
let layer3speed = 1;
###

### System Varibles###

position = 0
velocity = 1
oldposition = 0

### BG Effect ###

### Disabled ###

###
setInterval(function() {
    position += velocity;
    velocity = Math.round(velocity / drag) + (window.scrollY - oldposition);
    document.getElementsByClassName("layer1")[0].style.backgroundPositionY = position * layer1speed + "px";
    document.getElementsByClassName("layer2")[0].style.backgroundPositionY = position * layer2speed + "px";
    document.getElementsByClassName("layer3")[0].style.backgroundPositionY = position * layer3speed + "px";
    oldposition = window.scrollY;
}, 50);
###

### Load Effect ###

###
setTimeout(function() {
	if (localStorage.getItem("theme") == "alcode"){
    document.getElementsByClassName("layer4")[0].style.background = "transparent";
	} else{
		document.getElementsByClassName("layer3")[0].style.background = "transparent";
	}
}, 100);
###

changepage = (targeturl) ->
  window.history.pushState '', 'TechAdvancedCyborg\'s Website', targeturl
  $.get targeturl, (data) ->
    el.innerHTML = data
    return
  document.getElementsByTagName('body')[0].innerHTML = el.getElementsByTagName('body')[0].innerHTML
  document.getElementsByTagName('head')[0].innerHTML = el.getElementsByTagName('head')[0].innerHTML
  return

processAjaxData = (response, urlPath) ->
  document.getElementById('content').innerHTML = response.html
  document.title = response.pageTitle
  window.history.pushState {
    'html': response.html
    'pageTitle': response.pageTitle
  }, '', urlPath
  return