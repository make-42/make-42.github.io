### User Variables ###

cityname = 'Paris,fr'
lat = '48.837985'
lon = '2.395997'
appid = '3ee4c5cdcac622727b68312127512f9a'
xgridpoints = 4
ygridmultiplier = 4
ytextmultiplier = 2
smoothing = 3

### Variables ###

sunicon = 'assets/png/004-sun.pngY.png'
moonicon = 'assets/png/027-moon phase.pngY.png'
cloudyicon = 'assets/png/001-cloudy.pngY.png'
cloudynighticon = 'assets/png/002-cloudy night.pngY.png'
cloudsandsunicon = 'assets/png/003-clouds and sun.pngY.png'
thunderstormicon = 'assets/png/006-thunderstorm.pngY.png'
rainicon = 'assets/png/007-rain.pngY.png'
rainnighticon = 'assets/png/014-rain.pngY.png'
heavyrainicon = 'assets/png/008-heavy-rain.pngY.png'
stormicon = 'assets/png/009-storm.pngY.png'
rainandsunicon = 'assets/png/010-rain.pngY.png'
snowicon = 'assets/png/011-snow.pngY.png'
fogicon = 'assets/png/022-fog.pngY.png'
fognighticon = 'assets/png/023-fog.pngY.png'

### System Variables ###

url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=' + appid
urlonecall = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + appid
canvas = undefined
ctx = undefined

### Update Function ###

updateweather = ->

  ### Get stylesheet ###

  style = getComputedStyle(document.body)

  ### Widget Animations ###

  $.get url, (data, textStatus, jqXHR) ->

    ### Parse Data ###

    temp = Math.round((data.main.temp - 273.15) * 10) / 10
    state = data.weather[0].main
    city = data.name
    country = data.sys.country
    iconcode = data.weather[0].icon

    ### Set Text ###

    document.getElementsByClassName('city')[0].innerHTML = city + ', ' + country
    document.getElementsByClassName('temp')[0].innerHTML = temp + '°C'
    document.getElementsByClassName('state')[0].innerHTML = state

    ### Get Appropriate Icon ###

    iconsrc = ''
    switch iconcode
      when '01d'
        iconsrc = sunicon
      when '01n'
        iconsrc = moonicon
      when '02d'
        iconsrc = cloudsandsunicon
      when '02n'
        iconsrc = cloudynighticon
      when '03d'
        iconsrc = cloudyicon
      when '03n'
        iconsrc = cloudyicon
      when '04d'
        iconsrc = cloudyicon
      when '04n'
        iconsrc = cloudyicon
      when '09d'
        iconsrc = rainicon
      when '09n'
        iconsrc = rainicon
      when '10d'
        iconsrc = rainandsunicon
      when '10n'
        iconsrc = rainnighticon
      when '11d'
        iconsrc = thunderstormicon
      when '11n'
        iconsrc = thunderstormicon
      when '13d'
        iconsrc = snowicon
      when '13n'
        iconsrc = snowicon
      when '50d'
        iconsrc = fogicon
      when '50n'
        iconsrc = fognighticon
      else
        iconsrc = 'error'

    ### Set Icon###

    document.getElementsByClassName('icon')[0].setAttribute 'src', iconsrc
    return

  ### Draw Plot###

  ### Get Hourly Forecast ###

  $.get urlonecall, (data, textStatus, jqXHR) ->

    ### Get min and max for values ###

    hourly = data.hourly
    minhourlydt = hourly[0].dt
    i = 0
    maxtemp = hourly[0].temp
    mintemp = hourly[0].temp
    while i < hourly.length
      if maxtemp < hourly[i].temp
        maxtemp = hourly[i].temp
      if mintemp > hourly[i].temp
        mintemp = hourly[i].temp
      i++

    ### Get Canvas Res ###

    canvasresx = document.getElementById('canvas').width
    canvasresy = document.getElementById('canvas').height

    ### Set scale accordingly ###

    scalex = canvasresx / 174300
    scaley = canvasresy / (maxtemp - mintemp)

    ### Clear Canvas ###

    ctx.clearRect 0, 0, canvasresx, canvasresy

    ### Draw Plot ###

    ctx.strokeStyle = style.getPropertyValue('--text-color-light')
    ctx.fillStyle = style.getPropertyValue('--text-color-light')
    ctx.lineWidth = Math.round(canvasresx / 1000)
    ctx.font = (canvasresx / 100).toString() + 'px "JetBrains Mono"'

    ###Grid###

    i = 0
    while i < xgridpoints + 1
      ctx.beginPath()
      ctx.moveTo canvasresx * 0.9705 / xgridpoints * i, 0
      ctx.lineTo canvasresx * 0.9705 / xgridpoints * i, canvasresy
      ctx.closePath()
      ctx.stroke()
      i++

    ### Draw Curve ###

    ctx.beginPath()
    ctx.moveTo 0, mintemp + (maxtemp - (hourly[0].temp)) / scaley - 273.15
    i = 0
    while i < hourly.length

      ### Find X,Y coordinates ###

      x = (hourly[i].dt - minhourlydt) * scalex
      y = (maxtemp - (hourly[i].temp)) * scaley
      xc = x
      yc = y
      try
        xc = (x * smoothing + (hourly[i + 1].dt - minhourlydt) * scalex) / (smoothing + 1)
        yc = (y * smoothing + (maxtemp - (hourly[i + 1].temp)) * scaley) / (smoothing + 1)
      catch e

      ### Draw Line ###

      ctx.quadraticCurveTo x, y, xc, yc

      ### Draw Text ###

      if Number.isInteger(i / ytextmultiplier)
        tempdisplay = (Math.round((hourly[i].temp - 273.15) * 10) / 10).toString()
        textx = x - (tempdisplay.length * canvasresx / 200)
        if y < canvasresx / 50
          texty = y + canvasresx / 150
        else
          texty = y - (canvasresx / 150)
        # ctx.fillText(tempdisplay, textx, texty);
        # ctx.strokeStyle = '#000000';
        # ctx.lineWidth = Math.round(canvasresx / 4000);
        ctx.strokeStyle = style.getPropertyValue('--text-color-light')
        ctx.fillStyle = style.getPropertyValue('--text-color-light')
        ctx.fillText tempdisplay, textx, texty
        ctx.lineWidth = Math.round(canvasresx / 2000)
      i++
    ctx.stroke()
    ctx.closePath()
    document.getElementsByClassName('icon')[0].style.transform = 'scale(1)'
    return
  console.log 'updated'
  return

console.log urlonecall
$(document).ready ->
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  updateweather()
  setInterval updateweather, 60000
  setInterval checkdarkreader, 1000
  return

### Check if dark reader is enabled ###

# function checkdarkreader() {
#     if (!!document.getElementsByClassName("darkreader")[0]) {
#         /* Invert */
#         document.getElementsByClassName("icon")[0].style.filter = "invert(1)";
#         document.getElementsByClassName("tempplot")[0].style.filter = "invert(1)";
#     } else {
#         /* Revert */
#         document.getElementsByClassName("icon")[0].style.filter = "invert(0)";
#         document.getElementsByClassName("tempplot")[0].style.filter = "invert(0)";
#     }
# }
