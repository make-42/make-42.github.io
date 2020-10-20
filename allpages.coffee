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

# Blur Easter Egg
blurstate = 0

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

document.addEventListener 'keydown', (event) ->
  switch blurstate
    when 0
      if event.keyCode == 66
        blurstate++
      else
        blurstate = 0
    when 1
      if event.keyCode == 76
        blurstate++
      else
        blurstate = 0
    when 2
      if event.keyCode == 85
        blurstate++
      else
        blurstate = 0
    when 3
      if event.keyCode == 82
        csselement = document.createElement('style')
        csselement.innerHTML = '.menubar,.peopleinspace,.person,.weather,.typing-text,.download-div,#project-one,.blog-widget,.blog-post,.stopwatch-widget,.stopwatch-toggle-button,.stopwatch-clear-button,.stopwatch-clock,.stopwatch-hands,.typing-test-widget,.typing-words,.typing-results,.matrix-widget {backdrop-filter: blur(1vw);}'
        document.body.appendChild csselement
        blurstate = 0
      else
        blurstate = 0
  return
# Neon Easter Egg
neonstate = 0
document.addEventListener 'keydown', (event) ->
  switch neonstate
    when 0
      if event.keyCode == 78
        neonstate++
      else
        neonstate = 0
    when 1
      if event.keyCode == 69
        neonstate++
      else
        neonstate = 0
    when 2
      if event.keyCode == 79
        neonstate++
      else
        neonstate = 0
    when 3
      if event.keyCode == 78
        csselement = document.createElement('style')
        csselement.innerHTML = '.layer4{background:url(/assets/images/jj-ying-azCTGObXR14-unsplash.webp);background-attachment: fixed;background-size: cover;background-position: center;}'
        document.body.appendChild csselement
        neonstate = 0
      else
        neonstate = 0
  return
