pug = require('pug')
fs = require('fs')
sha1 = require('sha1')
js2coffee = require('js2coffee')
CoffeeScript = require('coffeescript')

compile = (file, locals) ->
  #Jade Compilation
  text = fs.readFileSync(file + 'index.jade', 'utf8')
  fn = pug.compileFile(file + 'index.jade', 'pretty': true)
  hash = sha1(text)
  html = fn(Object.assign({}, locals, 'hash': hash))
  fs.writeFile file + 'index.html', html, (err) ->
    if err
      return console.log(err)
    console.log file + 'index.jade compiled.'
    return
  return

compile '', prefix: './'
compile 'blog/', prefix: '../blog/'
compile 'matrix/', prefix: '../matrix/'
compile 'resume/', prefix: '../resume/'
compile 'stats/', prefix: '../stats/'
compile 'tools/', prefix: '../tools/'
compile 'typing/', prefix: '../typing/'
compile 'weather/', prefix: '../weather/'
