darkmode = true;

function toggleDarkMode() {
    if (darkmode) {
        darkmode = !darkmode;
        document.body.style.setProperty('--background-color', "#FFF");
        document.body.style.setProperty('--text-color-light', "#000");
    } else {
        darkmode = !darkmode;
        document.body.style.setProperty('--background-color', "#222");
        document.body.style.setProperty('--text-color-light', "white");
    }
}


$('document')
    .ready(function() {
        setInterval(function() {
            var i = 0;
            while (i < document.getElementsByClassName("progress-bar-progress")
                .length) {
                document.getElementsByClassName("progress-bar-progress")[i].style.width = Math.random() * 100 + "%";
                i++;
            }
        }, 500)
        /*
         var i=0;
            while(i<document.getElementsByClassName("torrent").length){
            document.getElementsByClassName("torrent")[i].addEventListener("click", function() {
        var i=0;
            while(i<document.getElementsByClassName("torrent").length){
            document.getElementsByClassName("torrent")[i].className = "torrent";
            i++;
          }
        event.srcElement.parentNode.className = "torrent torrent-selected";
        });
        document.getElementsByClassName("torrent")[i].addEventListener("mouseover", function() {
        var i=0;
            while(i<document.getElementsByClassName("torrent").length){
            if (document.getElementsByClassName("torrent")[i].className != "torrent torrent-selected"){
            document.getElementsByClassName("torrent")[i].className = "torrent";
        }
            i++;
          }
        if (event.srcElement.parentNode.className != "torrent torrent-selected"){
        event.srcElement.parentNode.className = "torrent torrent-hover";
        }
        });
            i++;
          }
        */
    });