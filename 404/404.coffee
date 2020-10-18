codelines = [
  'Eeeeekkk!'
  'What are you doing here?'
  'Oh!'
  'Hi!'
  'Welcome to the void!'
  'Let\'s chill here together for a while...'
]
cursor = ''
chrname = '[????]'
$(document).ready ->
  slice = 0
  lineindex = 0
  state = false
  currentcodeline = codelines[lineindex]
  setInterval (->
    document.getElementById('terminal-text').innerHTML = chrname + '<br>' + currentcodeline.slice(0, slice) + cursor
    if slice - 1 != currentcodeline.length
      if slice - 1 == 0
        if state
          lineindex++
          currentcodeline = codelines[lineindex]
          state = false
      if state == true
        slice--
      else
        slice++
    else
      if lineindex + 1 == codelines.length
      else
        state = !state
        slice--
    return
  ), 30
  setInterval (->
    if cursor == ''
      cursor = '_'
    else
      cursor = ''
    return
  ), 500
  # Suki Easter Egg
  chrstate = 0
  chrdiscovered = false
  document.addEventListener 'keydown', (event) ->
    switch chrstate
      when 0
        if !chrdiscovered
          if event.keyCode == 83
            chrstate++
            chrname = '[S???]'
          else
            chrstate = 0
            chrname = '[????]'
      when 1
        if !chrdiscovered
          if event.keyCode == 85
            chrstate++
            chrname = '[Su??]'
          else
            chrstate = 0
            chrname = '[????]'
      when 2
        if !chrdiscovered
          if event.keyCode == 75
            chrstate++
            chrname = '[Suk?]'
          else
            chrstate = 0
            chrname = '[????]'
      when 3
        if !chrdiscovered
          if event.keyCode == 73
            chrname = '[Suki]'
            console.log 'Ehh! How do you know my name? Weirdo...'
            codelines.push 'Ehh! How do you know my name? Weirdo...'
            chrstate = 0
            chrdiscovered = true
          else
            chrstate = 0
            chrname = '[????]'
    return
  return
