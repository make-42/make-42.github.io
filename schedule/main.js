var scale = 60
var eventDivPaddingOffset = 10;

if (localStorage.getItem('dark-mode') == null){
    localStorage.setItem('dark-mode',false);
}

var scheduleData;
var weekNumber;
var dayOfWeek;
var realWeekNumber;

var datesData;

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

function toggleDarkMode(){
    if(localStorage.getItem('dark-mode') == "true"){
        localStorage.setItem('dark-mode',false);
        offDarkMode();
        toastNotification("Retina burning action!")
    } else{
        localStorage.setItem('dark-mode',true);
        onDarkMode();
        toastNotification("Lights out!")
    }
}
function onDarkMode(){
    var root = document.documentElement;
    root.style.setProperty('--main-bg-color', "black");
    root.style.setProperty('--text-color', "white");
    root.style.setProperty('--text-secondary-color', "#ababab");
    root.style.setProperty('--border-color', "rgba(255, 255, 255, 0.33)");
    root.style.setProperty('--semi-bg-color', "rgba(255, 255, 255, 0.03)");
    document.getElementById("header-icon-image").style.filter = "invert(1)";

}
function offDarkMode(){
    var root = document.documentElement;
    root.style.setProperty('--main-bg-color', "white");
        root.style.setProperty('--text-color', "black");
        root.style.setProperty('--text-secondary-color', "#555");
        root.style.setProperty('--border-color', "rgba(0, 0, 0, 0.33)");
        root.style.setProperty('--semi-bg-color', "rgba(0, 0, 0, 0.03)");
        document.getElementById("header-icon-image").style.filter = "invert(0)";
}

function formatDateForUse(dateString){
    return moment(dateString).format('MMMM D, YYYY');
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

function loadDates(){
    datesData = JSON.parse(localStorage.getItem('dates-file'));
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
            const eventRoomDiv = document.createElement("div");
            eventRoomDiv.innerHTML = eventData.room;
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

function updateDates(){
    datesDataList = datesData.dates;
    document.getElementById("dates-list-list").innerHTML = "";
    currdatepassed = false;
    for (let i = 0; i < datesDataList.length; i++) {
        var itDateData=datesDataList[i]
        var dateDiv = document.createElement("div");
        dateDiv.className = "dates-date";
        var dateTitleDiv = document.createElement("div");
        dateTitleDiv.innerHTML = itDateData.title;
        dateTitleDiv.className = "dates-date-title";
        var dateDateDiv = document.createElement("div");
        if (itDateData.startDate != itDateData.endDate){
        dateDateDiv.innerHTML = formatDateForUse(itDateData.startDate)+" - "+formatDateForUse(itDateData.endDate);
        } else{
            dateDateDiv.innerHTML = formatDateForUse(itDateData.startDate)
        }
        dateDateDiv.className = "dates-date-date";
        var dateContentDiv = document.createElement("div");
        dateContentDiv.innerHTML = itDateData.description;
        dateContentDiv.className = "dates-date-description";
        dateDiv.appendChild(dateTitleDiv);
        dateDiv.appendChild(dateContentDiv);
        dateDiv.appendChild(dateDateDiv);
        if (moment(itDateData.startDate)-moment() > 0){
            if (!currdatepassed){
                currdatepassed = true;
                var seperatorDiv = document.createElement("div");
                seperatorDiv.id = "dates-seperator";
                seperatorDiv.innerHTML = "Current Date";
                document.getElementById("dates-list-list").appendChild(seperatorDiv);
            }
        }
        document.getElementById("dates-list-list").appendChild(dateDiv);
}}

function upload() {
    document.getElementById('FileAttachment').click();
}

function uploadDatesList() {
    document.getElementById('FileAttachmentDates').click();
}

function loadTSCDFile(filetoload) {
    var reader = new FileReader();
    reader.readAsText(filetoload, 'UTF-8');
    reader.onload = readerEvent => {
        var content = readerEvent.target.result;
        localStorage.setItem('schedule-file', content);
        loadCurrentSchedule();
        updateSchedule();
    }
}

function loadTSCDateFile(filetoload) {
    var reader = new FileReader();
    reader.readAsText(filetoload, 'UTF-8');
    reader.onload = readerEvent => {
        var content = readerEvent.target.result;
        localStorage.setItem('dates-file', content);
        loadDates();
        updateDates();
    }
}

document.getElementById('FileAttachment').onchange = e => {
    var file = e.target.files[0];
    loadTSCDFile(file);
}

document.getElementById('FileAttachmentDates').onchange = e => {
    var dateFile = e.target.files[0];
    loadTSCDateFile(dateFile);
}

if(localStorage.getItem('dark-mode') == "true"){
    onDarkMode();
} else{
    offDarkMode();
}

loadCurrentSchedule();
updateSchedule();
loadDates();
updateDates();