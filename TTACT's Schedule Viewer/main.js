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
        var textelementdiv = document.createElement("div");
        textelementdiv.className = "text-element";
        scheduleelementdiv.className = "schedule-element";
        scheduleelementdiv.style.top = scheduleelement["start"]-mintime+20 + "px"
        scheduleelementdiv.style.height = (scheduleelement["end"] - scheduleelement["start"]).toString() + "px"
        scheduleelementdiv.style.background = scheduleelement["color"]
        textelementdiv.innerHTML = scheduleelement["name"]
        scheduleelementdiv.appendChild(textelementdiv)
        document.getElementsByClassName("schedule-content")[0].appendChild(scheduleelementdiv);
    })
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

        tabBar.activateTab(0);
        topappbar = new mdc.topAppBar.MDCTopAppBar(document.getElementsByClassName("mdc-top-app-bar")[0])
        $(".add-button")
            .on("click", function() {
                $("input")
                    .trigger("click");
            });
        document.getElementById("FileAttachment")
            .addEventListener('change', onChange);
    });
