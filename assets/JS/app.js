$(document).ready(function() { 
var NowMoment = moment();

// display value of moment object in #displayMoment div
var eDisplayMoment = document.getElementById('displayMoment');

eDisplayMoment.innerHTML = NowMoment;

// var planner = "Work Day Scheduler";
var userActivity = [];


var workDayHours = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];

function createTimeBlocks() {
    let blocks = "";
    for (let i = 0; i < workDayHours.length; i++) {
        var hourBlocks = "" + '<div class="input-group mb-3">'
            + '<div class="input-group-prepend">' + '<span class="input-group-text">' + workDayHours[i] + '</span>' + '</div>'
            + '<input type="text" class="form-control" id="' + workDayHours[i] + '">' + '<div class="input-group-append">'
            + '<button class="btn btn-primary" data-time="' + workDayHours[i] + '"><i class="fa fa-save"></i></button>'
            + '</div>' + '</div>'; blocks += hourBlocks;
        var inputRow = (".input-group");
        inputRow = (".form-control").valueOf;
        userActivity.push(inputRow);
    } 
    $('#time-blocks').append(blocks);
}

createTimeBlocks();

$("button").on("click", function(e) {
    e.preventDefault();
    localStorage.setItem("inputValue",JSON.stringify(userActivity))});

});