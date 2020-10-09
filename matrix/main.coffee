delay = 10
intervalparticles = undefined

spawnparticle = ->
  particle = document.createElement('div')
  particle.innerHTML = Math.random().toString(36).slice(2)[1]
  particle.className = 'matrix-letters'
  particle.style.left = Math.round(Math.random() * 57) * 1.7 + 'vw'
  document.getElementsByClassName('matrix-widget')[0].appendChild particle
  setTimeout ((object) ->
    object.remove()
    return
  ), 1000, particle
  return

$(document).ready ->
  intervalparticles = setInterval(spawnparticle, delay)
  return
document.addEventListener 'keydown', (event) ->
  if event.keyCode == 37
    delay *= 1.5
  else if event.keyCode == 39
    delay /= 1.5
  else
    return 0
  clearInterval intervalparticles
  intervalparticles = setInterval(spawnparticle, delay)
  return
