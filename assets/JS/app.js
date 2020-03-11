$(document).ready(function() { 
var NowMoment = moment();

// display value of moment object in #displayMoment div
var eDisplayMoment = document.getElementById('displayMoment');

eDisplayMoment.innerHTML = NowMoment;

// var planner = "Work Day Scheduler";
var userInput = [];


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

// local storage

$("button").on("click", function(e) {
    e.preventDefault();
    localStorage.setItem("inputValue",JSON.stringify(userActivity))});



    var userActivity = JSON.parse(localStorage.getItem("inputValue"));

    $("#8am").on('click', function () {
        var userInput = $("#8am-input").val();
        console.log(userInput)
        localStorage.setItem("8am", userInput)
    })
    $("#9am").on('click', function () {
        var userInput = $("#9am-input").val();
        console.log(userInput)
        localStorage.setItem("9am", userInput)
    })
    $("#10am").on('click', function () {
        var userInput = $("#10am-input").val();
        console.log(userInput)
        localStorage.setItem("10am", userInput)
    })
    $("#11am").on('click', function () {
        var userInput = $("#11am-input").val();
        console.log(userInput);
        localStorage.setItem("11am", userInput);
    })
    $("#12pm").on('click', function () {
        var userInput = $("#12pm-input").val();
        console.log(userInput);
        localStorage.setItem("12pm", userInput);
    })
    $("#1pm").on('click', function () {
        var userInput = $("#1pm-input").val();
        console.log(userInput);
        localStorage.setItem("1pm", userInput);
    })
    $("#2pm").on('click', function () {
        var userInput = $("#2pm-input").val();
        console.log(userInput);
        localStorage.setItem("2pm", userInput);
    })
    $("#3pm").on('click', function () {
        var userInput = $("#3pm-input").val();
        console.log(userInput);
        localStorage.setItem("3pm", userInput);
    })
    $("#4pm").on('click', function () {
        var userInput = $("#4pm-input").val();
        console.log(userInput);
        localStorage.setItem("4pm", userInput);
    })
    $("#5pm").on('click', function () {
        var userInput = $("#5pm-input").val();
        console.log(userInput);
        localStorage.setItem("5pm", userInput);
    })
    
});

console.log(inputValue);


