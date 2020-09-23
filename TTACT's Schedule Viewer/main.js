Date.prototype.getWeekNumber = function() {
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
};

function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
}

function onReaderLoad(event) {
    localStorage.setItem('schedule-data', event.target.result);
}

function loaddefault(){
  $.get( "306%20-%202020-2021.tschdl", function( data ) {
  localStorage.setItem('schedule-data', data);
})
}

function formattimestamps(timestamp){
  hours = Math.floor(timestamp/60)
  minutes = Math.round((timestamp/60-hours)*60)
  if (minutes<10){
    minutes="0"+minutes;
  }
  return hours+":"+minutes
}

function loadcalendar(selectedtab) {
    scheduledata = JSON.parse(localStorage.getItem("schedule-data"))
    week = scheduledata["weeks"][(new Date()
            .getFullYear())
        .toString()
    ][(new Date()
            .getWeekNumber())
        .toString()
    ]
    day = scheduledata["schedule"][week][selectedtab.id[selectedtab.id.length - 1] - 1]
    if (day.length != 0){
    mintime = 10000;
    day.forEach(function(scheduleelement) {
      if (mintime > scheduleelement["start"]){
        mintime = scheduleelement["start"]
      }
    });
    document.getElementsByClassName("schedule-content")[0].innerHTML = "";
    day.forEach(function(scheduleelement) {
        document.getElementsByClassName("schedule-content")[0].innerHTML;
        var scheduleelementdiv = document.createElement("div");
        var nameelementdiv = document.createElement("div");
        var timeelementdiv = document.createElement("div");
        var placeelementdiv = document.createElement("div");
        nameelementdiv.className = "name-element";
        timeelementdiv.className = "time-element";
        placeelementdiv.className = "place-element";
        scheduleelementdiv.className = "schedule-element";
        scheduleelementdiv.style.background = scheduleelement["color"]
        scheduleelementdiv.style.boxShadow = "1px 1px 10px "+scheduleelement["color"];
        nameelementdiv.innerHTML = scheduleelement["name"]
        timeelementdiv.innerHTML = formattimestamps(scheduleelement["start"])+"&nbsp;-&nbsp;"+formattimestamps(scheduleelement["end"])
        placeelementdiv.innerHTML = scheduleelement["place"]
        scheduleelementdiv.appendChild(nameelementdiv)
        scheduleelementdiv.appendChild(timeelementdiv)
        scheduleelementdiv.appendChild(placeelementdiv)
        document.getElementsByClassName("schedule-content")[0].appendChild(scheduleelementdiv);
    })
} else{
  document.getElementsByClassName("schedule-content")[0].innerHTML = "";
}
}
$(document)
    .ready(function() {
        //mdc.ripple.MDCRipple.attachTo(document.querySelector('.rippleeffect'));
        const tabBar = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
        const tabs = document.querySelectorAll('.mdc-tab');

        tabBar.listen('MDCTabBar:activated', function(event) {
            let tab = tabs[event.detail.index];
            loadcalendar(tab)
        });
        if(localStorage.getItem("schedule-data") == undefined){
          loaddefault();
        }
        tabBar.activateTab(new Date().getDay()-1);
        topappbar = new mdc.topAppBar.MDCTopAppBar(document.getElementsByClassName("mdc-top-app-bar")[0])
        $(".add-button")
            .on("click", function() {
                $("input")
                    .trigger("click");
            });
        document.getElementById("FileAttachment")
            .addEventListener('change', onChange);
    });
