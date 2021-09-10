var scale = 60
var eventDivPaddingOffset = 10;


var scheduleData;
var weekNumber;
var dayOfWeek;
var realWeekNumber;

function animateScheduleEventDestroy() {
    scheduleEventElements = document.getElementsByClassName("schedule-event")
    for (let i = 0; i < scheduleEventElements.length; i++) {
        scheduleEventElements[i].className += " schedule-event-destroy";
    }
}

function toastNotification(textToDisplay) {
    document.getElementById("toast-notification").innerHTML = textToDisplay;
    document.getElementById("toast-notification").style.top = "0";
    setTimeout(function() {
        document.getElementById("toast-notification").style = "";
    }, 1000);
}

function toastCopyright() {
    toastNotification("Copyright. Louis Dalibard. 2021. All rights reserved.")
}

function lastWeek() {
    weekNumber--;
    animateScheduleEventDestroy();
    setTimeout(updateSchedule, 150);
}

function nextWeek() {
    weekNumber++;
    animateScheduleEventDestroy();
    setTimeout(updateSchedule, 150);
}

function loadCurrentSchedule() {
    scheduleData = JSON.parse(localStorage.getItem('schedule-file'));
    weekNumber = 0;
    var a = moment(scheduleData.weeks.startDate);
    var b = moment();
    var diffdays = b.diff(a, 'days');
    dayOfWeek = diffdays % 7;
    weekNumber = Math.floor(diffdays / 7);
    realWeekNumber = weekNumber;
}

function updateSchedule() {
    document.getElementById("week-count").innerHTML = weekNumber;
    if (weekNumber == realWeekNumber) {
        document.getElementById("week-count").style.textDecoration = "underline dotted black";
    } else {
        document.getElementById("week-count").style.textDecoration = "underline dotted transparent";
    }
    var weekType = scheduleData.weeks.weekTypeString[weekNumber];
    var weekData = scheduleData.schedule[weekType];
    for (let i = 0; i < weekData.length; i++) {
        var dayData = weekData[i];
        document.getElementById("schedule-days").children[i].innerHTML = "";
        for (let j = 0; j < dayData.length; j++) {
            var eventData = dayData[j]
            var eventStart = eventData.start.split(":")[0] * 60 + eventData.start.split(":")[1];
            var eventEnd = eventData.end.split(":")[0] * 60 + eventData.end.split(":")[1];
            var eventDuration = eventEnd - eventStart
            const eventDiv = document.createElement("div");
            const eventNameDiv = document.createElement("div");
            eventNameDiv.innerHTML = eventData.name;
            eventNameDiv.className = "schedule-event-name";
            eventDiv.appendChild(eventNameDiv);
            const eventTimeDiv = document.createElement("div");
            eventTimeDiv.innerHTML = eventData.start + " - " + eventData.end;
            eventTimeDiv.className = "schedule-event-time";
            eventDiv.appendChild(eventTimeDiv);
            eventDiv.className = "schedule-event";
            eventDiv.style = "height: " + String((eventDuration / scale) - eventDivPaddingOffset) + "px;" + "top: " + String(eventStart / scale) + "px;"
            document.getElementById("schedule-days").children[i].appendChild(eventDiv);
            if (i == dayOfWeek) {
                document.getElementsByClassName("schedule-weekday-name")[i].style.textDecoration = "underline dotted black";
            } else {
                document.getElementsByClassName("schedule-weekday-name")[i].style.textDecoration = "underline dotted transparent";
            }
        }
    }
}

function upload() {
    document.getElementById('FileAttachment').click();
}

function loadTSCDFile(filetoload) {
    var reader = new FileReader();
    reader.readAsText(filetoload, 'UTF-8');
    reader.onload = readerEvent => {
        var content = readerEvent.target.result;
        localStorage.setItem('schedule-file', content);
        loadCurrentSchedule();
    }
}

document.getElementById('FileAttachment').onchange = e => {
    var file = e.target.files[0];
    loadTSCDFile(file);
}

loadCurrentSchedule();
updateSchedule();