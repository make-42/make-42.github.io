var pug = require('pug');
const fs = require('fs');

//index.html
compile("index",{prefix:"./"});
function compile(file,locals){
var fn = pug.compileFile(file+'.jade',{"pretty":true});
var html = fn(locals);
fs.writeFile(file+".html", html, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(file+".jade compiled");
});
}


