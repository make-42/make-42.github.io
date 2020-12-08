/* Variables */
var issurl = "http://api.open-notify.org/iss-now.json";
var peopleinspaceurl = "https://cors-anywhere.herokuapp.com/www.howmanypeopleareinspacerightnow.com/peopleinspace.json";
var shipicon = "assets/png/spring-swing-rocket.png";
var personicon = "assets/png/kitty.png";

/* Get Request Function */
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}




function updateissloc() {
    /* Get Request For Data */
    httpGetAsync(issurl,
        function(dataraw) {
            /* Parse JSON */
            data = JSON.parse(dataraw);
            /* Update HTML */
            document.getElementsByClassName("issposition")[0].innerHTML = "<h2>ISS Position</h2>Latitude: " + data.iss_position.latitude + "\n<br>\nLongitude: " + data.iss_position.longitude;
        });
}

function updatepeopleinspace() {
    $.get(peopleinspaceurl, // url
        function(data, textStatus, jqXHR) {
            peoplearray = data.people;
            htmlend = "";
            document.getElementsByClassName("peopleinspace")[0].style.height = ((9*peoplearray.length)+5)+"vw";
            /* Make containers for each person */
            for (person of peoplearray) {
                /* Calculate days spent in space in current mission */
                /* Get Dates */
                now = new Date();
                launch = new Date(person.launchdate);
                /* Calculate Differences */
                diffdays = " (" + Math.floor((now - launch) / (1000 * 3600 * 24)).toString() + " Days)";
                /* Set HTML */
                htmlend += "<div class=\"person animonload1\">";
                htmlend += "<img src=\"" + personicon + "\" class=\"personicon animonload1\" alt=\"" + person.bio + "\" title=\"" + person.bio + "\"></img>"
                htmlend += "<div class=\"personname animonload1\">" + person.name + diffdays + "</div>";
                htmlend += "<div class=\"craft animonload1\">" + person.location;
                htmlend += "<img src=\"" + shipicon + "\" class=\"crafticon animonload1\"></img>";
                htmlend += "</div></div><br>";

            }
            /* Update HTML */
            document.getElementsByClassName("peopleinspace")[0].innerHTML = "<h2>People in Space</h2>" + htmlend;
        });
}
$(document).ready(function() {
    /* Update All Values On Document Ready */
    // updateissloc();

    updatepeopleinspace();
    /* Set Correct Intervals */
    // setInterval(updateissloc, 1000);
    setInterval(updatepeopleinspace, 60000);
    setInterval(checkdarkreader, 1000);
});
/* Check if dark reader is enabled */
function checkdarkreader() {
    if (!!document.getElementsByClassName("darkreader")[0]) {
        /* Invert */
        for (var iconindex in [...Array(document.getElementsByClassName("personicon").length).keys()]) {
            document.getElementsByClassName("personicon")[iconindex].style.filter = "invert(1)";
            document.getElementsByClassName("crafticon")[iconindex].style.filter = "invert(1)";
        }
    } else {
        /* Revert */
        for (var iconindex in [...Array(document.getElementsByClassName("personicon").length).keys()]) {
            document.getElementsByClassName("personicon")[iconindex].style.filter = "invert(0)";
            document.getElementsByClassName("crafticon")[iconindex].style.filter = "invert(0)";
        }
    }
}
