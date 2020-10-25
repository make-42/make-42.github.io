angle = 1
positions = [
  [
    20
    15
  ]
  [
    21
    15
  ]
  [
    22
    15
  ]
  [
    23
    15
  ]
  [
    24
    15
  ]
]

drawframe = ->
  document.getElementById('snake-window').innerHTML = ''
  i = undefined
  i = 0
  while i < positions.length
    divelement = document.createElement('div')
    divelement.className = 'snake-pixel'
    divelement.style.left = positions[i][0] + 'vw'
    divelement.style.top = positions[i][1] + 'vw'
    document.getElementById('snake-window').appendChild divelement
    i++
  return

gameover = ->
  alert 'GAME OVER'
  positions = [
    [
      20
      15
    ]
    [
      21
      15
    ]
    [
      22
      15
    ]
    [
      23
      15
    ]
    [
      24
      15
    ]
  ]
  return

updatesnake = ->
  newpositions = []
  i = undefined
  i = 0
  while i < positions.length - 1
    newpositions.push positions[i + 1]
    i++
  switch angle
    when 0
      vector = [
        0
        0 - 1
      ]
    when 1
      vector = [
        1
        0
      ]
    when 2
      vector = [
        0
        1
      ]
    when 3
      vector = [
        0 - 1
        0
      ]
  newpositions.push [
    positions[positions.length - 1][0] + vector[0]
    positions[positions.length - 1][1] + vector[1]
  ]
  positions = newpositions
  if newpositions[newpositions.length - 1][0] > 39
    gameover()
  if newpositions[newpositions.length - 1][0] < 0
    gameover()
  if newpositions[newpositions.length - 1][1] > 29
    gameover()
  if newpositions[newpositions.length - 1][1] < 0
    gameover()
  return

$(document).ready ->
  setInterval (->
    updatesnake()
    drawframe()
    return
  ), 200
  document.addEventListener 'keydown', (event) ->
    switch event.keyCode
      when 38
        angle = 0
      when 39
        angle = 1
      when 40
        angle = 2
      when 37
        angle = 3
    return
  return
