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
            /* Make containers for each person */
            for (person of peoplearray) {
                /* Calculate days spent in space in current mission */
                /* Get Dates */
                now = new Date();
                launch = new Date(person.launchdate);
                /* Calculate Differences */
                diffdays = " (" + Math.floor((now - launch) / (1000 * 3600 * 24)).toString() + " Days)";
                /* Set HTML */
                htmlend += "<div class=\"person\">";
                htmlend += "<img src=\"" + personicon + "\" class=\"personicon\" alt=\"" + person.bio + "\" title=\"" + person.bio + "\"></img>"
                htmlend += "<div class=\"personname\">" + person.name + diffdays + "</div>";
                htmlend += "<div class=\"craft\">" + person.location;
                htmlend += "<img src=\"" + shipicon + "\" class=\"crafticon\"></img>";
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
});
