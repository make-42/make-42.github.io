var pug = require('pug');
const fs = require('fs');
var sha1 = require('sha1');

function compile(file,locals){
var text = fs.readFileSync(file+'.jade','utf8')
var fn = pug.compileFile(file+'.jade',{"pretty":true});
var hash = sha1(text);
var html = fn(Object.assign({}, locals, {"hash":hash}));
fs.writeFile(file+".html", html, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(file+".jade compiled");
});
}

compile("index",{prefix:"./"});
compile("blog/index",{prefix:"../blog/"});
compile("matrix/index",{prefix:"../matrix/"});
compile("resume/index",{prefix:"../resume/"});
compile("stats/index",{prefix:"../stats/"});
compile("tools/index",{prefix:"../tools/"});
compile("typing/index",{prefix:"../typing/"});
compile("weather/index",{prefix:"../weather/"});
