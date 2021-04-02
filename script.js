// Current Day displayed at top
$("#currentDay").text(moment().format("[Today is ] dddd[, the ] Do"));

// Time Block Color-coded
function timeblock(selectorJQ, timeSet) {
    var currentHour = parseInt(moment().format("H"));
    if ( timeSet < currentHour ) {
        selectorJQ.css("background-color", "rgb(166, 166, 166)");
    } else if ( timeSet == currentHour) {
        selectorJQ.css("background-color", "rgb(255, 080, 080)");
    } else {
        selectorJQ.css("background-color", "rgb(000, 255, 000)");
    };
};

timeblock($("#09am"),9);
timeblock($("#10am"),10);
timeblock($("#11am"),11);
timeblock($("#12pm"),12);
timeblock($("#01pm"),13);
timeblock($("#02pm"),14);
timeblock($("#03pm"),15);
timeblock($("#04pm"),16);
timeblock($("#05pm"),17);