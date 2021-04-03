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

// Create Empty Object if none stored
var scheduler = {
    am09: "",
    am10: "",
    am11: "",
    pm12: "",
    pm01: "",
    pm02: "",
    pm03: "",
    pm04: "",
    pm05: ""
};

// Load stored schedule
var storedSchedule = JSON.parse(localStorage.getItem("storedSchedule"));
if (storedSchedule !== null) {
    $("#text09").text(storedSchedule.am09);
    $("#text10").text(storedSchedule.am10);
    $("#text11").text(storedSchedule.am11);
    $("#text12").text(storedSchedule.pm12);
    $("#text13").text(storedSchedule.pm01);
    $("#text14").text(storedSchedule.pm02);
    $("#text15").text(storedSchedule.pm03);
    $("#text16").text(storedSchedule.pm04);
    $("#text17").text(storedSchedule.pm05);
} else {
    // Store Object if none exists
    localStorage.setItem("storedSchedule", JSON.stringify(scheduler));
};

// Save text in local storage
$("#btn09").click(function(){
    storedSchedule.am09 = $("#text09").val();
    localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));
});
$("#btn10").click(function(){
    storedSchedule.am10 = $("#text10").val();
    localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));
});
$("#btn11").click(function(){
    storedSchedule.am11 = $("#text11").val();
    localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));
});
$("#btn12").click(function(){
    storedSchedule.pm12 = $("#text12").val();
    localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));
});
$("#btn13").click(function(){
    storedSchedule.pm01 = $("#text13").val();
    localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));
});
$("#btn14").click(function(){
    storedSchedule.pm02 = $("#text14").val();
    localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));
});
$("#btn15").click(function(){
    storedSchedule.pm03 = $("#text15").val();
    localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));
});
$("#btn16").click(function(){
    storedSchedule.pm04 = $("#text16").val();
    localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));
});
$("#btn17").click(function(){
    storedSchedule.pm05 = $("#text17").val();
    localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));
});