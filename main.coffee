# Set Variables For Typing Effect
fpstext = 2
fpscursor = 1
sitetitles = [
  [
    '>&nbsp;'
    'cd&nbsp;'
    '~/'
    'Apps/'
    'NekoVault/'
  ]
  [
    '>&nbsp;'
    'firefox&nbsp;'
    '-new-tab&nbsp;'
    'techadvancedcyborg.'
    'github.'
    'io'
  ]
  [
    '>&nbsp;'
    'echo&nbsp;'
    'Converting&nbsp;'
    'caffeine&nbsp;'
    'to&nbsp;'
    'code...'
  ]
  [
    '>&nbsp;'
    'cd&nbsp;'
    '~/'
    'Apps/'
    'TTACT-s'
    '-Anime'
    '-Player'
    '-Revamped/'
  ]
  [
    '>&nbsp;'
    'echo&nbsp;'
    'Why&nbsp;'
    'did&nbsp;'
    'the&nbsp;'
    'chicken&nbsp;'
    'cross&nbsp;'
    'the&nbsp;'
    'road?'
  ]
  [
    '>&nbsp;'
    'echo&nbsp;'
    '“Fix&nbsp;'
    'the&nbsp;'
    'cause,&nbsp;'
    'not&nbsp;'
    'the&nbsp;'
    'symptom.”&nbsp;'
    '–&nbsp;'
    'Steve&nbsp;'
    'Maguire'
  ]
  [
    '>&nbsp;'
    'echo&nbsp;'
    '“Talk&nbsp;'
    'is&nbsp;'
    'cheap.&nbsp;'
    'Show&nbsp;'
    'me&nbsp;'
    'the&nbsp;'
    'code.”&nbsp;'
    '―&nbsp;'
    'Linus&nbsp;'
    'Torvalds'
  ]
  [
    '>&nbsp;'
    'ping&nbsp;'
    '1.'
    '1.'
    '1.'
    '1'
  ]
]
#System Variables
slice = 0
typing = true
sitetitle = sitetitles[Math.round(window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 * (sitetitles.length - 1))]
cursorstate = true

deletetypingchars = (elem) ->
  elem.remove()
  return

#Text Rendering Loop

updatetypingeffect = ->
  #Set Cursor String Accordingly
  cursor = ' '
  if cursorstate
    cursor = '_'
  #Type
  if typing
    #Set text in page
    char = document.createElement('div')
    charc = sitetitle[slice]
    if charc == ' '
      charc = '&nbsp;'
    char.innerHTML = charc
    char.className = 'typing-text-char'
    document.getElementsByClassName('typing-text')[0].append char
    slice++
  else
    #Set text in page
    document.getElementsByClassName('typing-text')[0].children[slice - 1].className = 'typing-text-char-remove'
    setInterval deletetypingchars, 200, document.getElementsByClassName('typing-text')[0].children[slice - 1]
    slice += 0 - 1
  #Reverse When At End of String
  if slice > sitetitle.length - 1
    typing = false
  #Reverse When At Start of String
  if slice < 1
    typing = true
    sitetitle = sitetitles[Math.round(window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 * (sitetitles.length - 1))]
  return

setInterval updatetypingeffect, 1000 / fpstext
#Cursor State Loop
setInterval (->
  #Reverse cursorstate variable
  if cursorstate
    cursorstate = false
  else
    cursorstate = true
  return
), 1000 / fpscursor
# Days and Seconds Since DOB Render Loop
setInterval (->
  `var i`
  try
    #Set Dates
    timezoneoffset = (new Date).getTimezoneOffset() * 60000
    now = new Date
    birth = new Date('2007/02/13 00:00:00')
    #Born within February 13 2007 00:00:00 to February 13 2007 01:00:00 UTC+00:00
    lastbirthday = new Date('2020/02/12')
    nextbirthday = new Date('2021/02/12')
    #Calculate Differences
    diffsecs = Math.floor((now - birth + timezoneoffset) / 1000)
    diffdays = Math.floor((now - birth + timezoneoffset) / (1000 * 3600 * 24))
    # Render Different Units Progress Bars

    ###
    birthdayprogress = (now-lastbirthday)/(nextbirthday-lastbirthday);
    birthdaytotaldays = (nextbirthday-lastbirthday)/86400000;
    birthdaymonthprogress = (birthdayprogress*12)-Math.floor(birthdayprogress*12);
    birthdaydayprogress = (birthdayprogress*birthdaytotaldays)-Math.floor(birthdayprogress*birthdaytotaldays);
    birthdayhourprogress = (birthdayprogress*birthdaytotaldays*24)-Math.floor(birthdayprogress*birthdaytotaldays*24);
    birthdayminuteprogress = (now.getSeconds()/60)-Math.floor(now.getSeconds()/60);
    document.getElementsByClassName("time-progress-minutes")[0].style.width = String(birthdayminuteprogress*100)+"%";
    document.getElementsByClassName("time-progress-hours")[0].style.width = String(birthdayhourprogress*100)+"%";
    document.getElementsByClassName("time-progress-days")[0].style.width = String(birthdaydayprogress*100)+"%";
    document.getElementsByClassName("time-progress-months")[0].style.width = String(birthdaymonthprogress*100)+"%";
    document.getElementsByClassName("time-progress-years")[0].style.width = String(birthdayprogress*100)+"%";
    ###

    #Render Text
    informationelement = document.getElementById('information')
    ageelement = document.getElementsByClassName('age')[0]
    stringage = diffdays.toString() + ' days or ' + diffsecs.toString() + ' seconds old.'
    if ageelement.innerHTML == ''
      i = 0
      while i < stringage.length
        ageelement.innerHTML += '<span class="agestring">' + stringage.charAt(i) + '</span>'
        i++
    else
      i = 0
      while i < stringage.length
        if ageelement.getElementsByClassName('agestring')[i].innerHTML != stringage[i]
          document.getElementsByClassName('age')[0].children[i].innerHTML = stringage[i]
          document.getElementsByClassName('age')[0].children[i].style.padding = '0px 10px 0px 10px'
        else
          document.getElementsByClassName('age')[0].children[i].style.padding = '0%'
        i++
    style = getComputedStyle(document.body)
    ageelement.style.color = style.getPropertyValue('--text-color-light')
    informationelement.style.transform = 'none'
    informationelement.style.color = style.getPropertyValue('--text-color-light')
  catch e
    #Catch Error (if element is not loaded yet)
    console.log 'error'
    console.log e.toString()
  return
), 200
#On Page Finish Loading
#Start Animation
setTimeout (->
  document.getElementsByClassName('typing-text')[0].style.width = '98.7%'
  return
), 1000
setTimeout (->
  document.getElementsByClassName('typing-text')[0].style.color = getComputedStyle(document.body).getPropertyValue('--text-color-light')
  return
), 2000
# Gnome Easter Egg
state = 0
audio = new Audio('./assets/audio/gnome.webm')
document.addEventListener 'keydown', (event) ->
  switch state
    when 0
      if event.keyCode == 71
        state++
      else
        state = 0
    when 1
      if event.keyCode == 78
        state++
      else
        state = 0
    when 2
      if event.keyCode == 79
        state++
      else
        state = 0
    when 3
      if event.keyCode == 77
        state++
      else
        state = 0
    when 4
      if event.keyCode == 69
        audio.play()
        document.getElementsByClassName('gnome-easter-egg')[0].style.transform = 'translate(-4vw,-4vw)'
        setTimeout (->
          document.getElementsByClassName('gnome-easter-egg')[0].style.transform = 'translate(-20vw,-20vw)'
          return
        ), 200
        state = 0
      else
        state = 0
  return
