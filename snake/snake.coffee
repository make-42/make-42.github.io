angle = 1
score = 0
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
snaketailposition = [
  19
  15
]
fruitposition = [
  10
  10
]

drawframe = ->
  document.getElementById('snake-window').innerHTML = ''
  drawsnake()
  drawfruit()
  drawscore()
  return

drawsnake = ->
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

updatefruit = ->
  newfruitposition = [
    Math.round(Math.random() * 39)
    Math.round(Math.random() * 29)
  ]
  if newfruitposition != fruitposition
    fruitposition = newfruitposition
  else
    updatefruit()
  return

drawfruit = ->
  divelement = document.createElement('div')
  divelement.className = 'snake-fruit'
  divelement.style.left = fruitposition[0] + 0.125 + 'vw'
  divelement.style.top = fruitposition[1] + 0.125 + 'vw'
  document.getElementById('snake-window').appendChild divelement
  return

drawscore = ->
  document.getElementById('snake-score').innerHTML = score * 100
  return

gameover = ->
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
  angle = 1
  score = 0
  return

issnake = (snakepixel) ->
  if snakepixel[0] == positions[newpositions.length - 1][0]
    if snakepixel[1] == positions[newpositions.length - 1][1]
      gameover()
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
  snaketailposition = positions[0]
  positions = newpositions
  if newpositions[newpositions.length - 1][0] > 39
    gameover()
  if newpositions[newpositions.length - 1][0] < 0
    gameover()
  if newpositions[newpositions.length - 1][1] > 29
    gameover()
  if newpositions[newpositions.length - 1][1] < 0
    gameover()
  if positions.slice(0, newpositions.length - 1).find(issnake) != undefined
    gameover()
  if newpositions[newpositions.length - 1][0] == fruitposition[0]
    if newpositions[newpositions.length - 1][1] == fruitposition[1]
      positions.unshift snaketailposition
      score++
      updatefruit()
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
