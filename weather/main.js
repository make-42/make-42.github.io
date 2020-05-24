/* User Variables */
        let cityname = "Paris,fr";
        let lat = "48.837985";
        let lon = "2.395997";
        let appid = "3ee4c5cdcac622727b68312127512f9a";
        let xgridpoints = 4;
        let ygridmultiplier = 4;
        let ytextmultiplier = 2;
        /* Variables */
        let sunicon = "assets/png/004-sun.png";
        let moonicon = "assets/png/027-moon phase.png";
        let cloudyicon = "assets/png/001-cloudy.png";
        let cloudynighticon = "assets/png/002-cloudy night.png";
        let cloudsandsunicon = "assets/png/003-clouds and sun.png";
        let thunderstormicon = "assets/png/006-thunderstorm.png";
        let rainicon = "assets/png/007-rain.png";
        let rainnighticon = "assets/png/014-rain.png";
        let heavyrainicon = "assets/png/008-heavy-rain.png";
        let stormicon = "assets/png/009-storm.png";
        let rainandsunicon = "assets/png/010-rain.png";
        let snowicon = "assets/png/011-snow.png";
        let fogicon = "assets/png/022-fog.png";
        let fognighticon = "assets/png/023-fog.png";
        /* System Variables */
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + appid;
        let urlonecall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + appid;
        var canvas;
        var ctx;
        console.log(urlonecall);
        /* Update Function */
        function updateweather() {
            $.get(url,
                function(data, textStatus, jqXHR) {
                    /* Parse Data */
                    temp = Math.round((data.main.temp - 273.15) * 10) / 10;
                    state = data.weather[0].main;
                    city = data.name;
                    country = data.sys.country;
                    iconcode = data.weather[0].icon;
                    /* Set Text */
                    document.getElementsByClassName("city")[0].innerHTML = city + ", " + country;
                    document.getElementsByClassName("temp")[0].innerHTML = temp + "°C";
                    document.getElementsByClassName("state")[0].innerHTML = state;
                    /* Get Appropriate Icon */
                    iconsrc = "";
                    if (iconcode == "01d") {
                        iconsrc = sunicon;
                    } else if (iconcode == "01d") {
                        iconsrc = moonicon;
                    } else if (iconcode == "02d") {
                        iconsrc = cloudsandsunicon;
                    } else if (iconcode == "02n") {
                        iconsrc = cloudynighticon;
                    } else if (iconcode == "03d") {
                        iconsrc = cloudyicon;
                    } else if (iconcode == "03n") {
                        iconsrc = cloudyicon;
                    } else if (iconcode == "04d") {
                        iconsrc = cloudyicon;
                    } else if (iconcode == "04n") {
                        iconsrc = cloudyicon;
                    } else if (iconcode == "09d") {
                        iconsrc = rainicon;
                    } else if (iconcode == "09n") {
                        iconsrc = rainicon;
                    } else if (iconcode == "10d") {
                        iconsrc = rainandsunicon;
                    } else if (iconcode == "10n") {
                        iconsrc = rainnighticon;
                    } else if (iconcode == "11d") {
                        iconsrc = thunderstormicon;
                    } else if (iconcode == "11n") {
                        iconsrc = thunderstormicon;
                    } else if (iconcode == "13d") {
                        iconsrc = snowicon;
                    } else if (iconcode == "13n") {
                        iconsrc = snowicon;
                    } else if (iconcode = "50d") {
                        iconsrc = fogicon
                    } else if (iconcode = "50n") {
                        iconsrc = fognighticon
                    } else {
                        iconsrc = "error";
                    }
                    /* Set Icon*/
                    document.getElementsByClassName("icon")[0].setAttribute("src", iconsrc);
                });
            /* Draw Plot*/
            /* Get Hourly Forecast */
            $.get(urlonecall, function(data, textStatus, jqXHR) {
                /* Get min and max for values */
                hourly = data.hourly;
                minhourlydt = hourly[0].dt;
                i = 0;
                maxtemp = hourly[0].temp;
                mintemp = hourly[0].temp;
                while (i < hourly.length) {
                    if (maxtemp < hourly[i].temp) {
                        maxtemp = hourly[i].temp;
                    }
                    if (mintemp > hourly[i].temp) {
                        mintemp = hourly[i].temp;
                    }
                    i++;
                }
                /* Get Canvas Res */
                let canvasresx = document.getElementById("canvas").width;
                let canvasresy = document.getElementById("canvas").height;
                /* Set scale accordingly */
                scalex = canvasresx / 174300;
                scaley = canvasresy / (maxtemp - mintemp);
                /* Clear Canvas */
                ctx.clearRect(0, 0, canvasresx, canvasresy);
                /* Draw Plot */
                ctx.strokeStyle = '#ffffff';
                ctx.fillStyle = '#ffffff';
                ctx.lineWidth = Math.round(canvasresx / 1000);
                ctx.font = (canvasresx / 100).toString() + "px Consolas";

                /*Grid*/
                i = 0;
                while (i < xgridpoints + 1) {
                    ctx.beginPath();
                    ctx.moveTo(canvasresx * 0.9705 / xgridpoints * i, 0);
                    ctx.lineTo(canvasresx * 0.9705 / xgridpoints * i, canvasresy);
                    ctx.closePath();
                    ctx.stroke();
                    i++;
                }
                /* Draw Curve */
                ctx.beginPath();
                ctx.moveTo(0, (mintemp + (maxtemp - hourly[0].temp) / scaley) - 273.15);
                i = 0;
                while (i < hourly.length) {
                    /* Find X,Y coordinates */
                    x = ((hourly[i].dt - minhourlydt) * scalex);
                    y = (maxtemp - hourly[i].temp) * scaley;
                    /* Draw Line */
                    ctx.lineTo(x, y);
                    /* Draw Text */
                    if (Number.isInteger(i / ytextmultiplier)) {
                        tempdisplay = (Math.round((hourly[i].temp - 273.15) * 10) / 10).toString();
                        textx = x - ((tempdisplay.length) * (canvasresx / 200));
                        if (y < (canvasresx / 50)) {
                            texty = y + (canvasresx / 150);
                        } else {
                            texty = y - (canvasresx / 150);
                        }
                        ctx.fillText(tempdisplay, textx, texty);
                        ctx.strokeStyle = '#000000';
                        ctx.lineWidth = Math.round(canvasresx / 4000);
                        ctx.strokeText(tempdisplay, textx, texty);
                        ctx.lineWidth = Math.round(canvasresx / 1000);
                        ctx.strokeStyle = '#ffffff';
                    }
                    i++;
                }
                ctx.stroke();
                ctx.closePath();

            });
            console.log("updated");
        }
        $(document).ready(function(){canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');updateweather();});
        setInterval(updateweather,60000);