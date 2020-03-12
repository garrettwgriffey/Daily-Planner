$(document).ready(function() { 
var nowMoment = moment();

$("#displayMoment").text(nowMoment);
// var planner = "Work Day Scheduler";
var userActivity = [];


var workDayHours = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];

// input boxes
function createTimeBlocks() {
    let blocks = "";
    for (let i = 0; i < workDayHours.length; i++) {
        var hourBlocks = "" + '<div class="input-group mb-3">'
            + '<div class="input-group-prepend">' + '<span class="input-group-text">' + workDayHours[i] + '</span>' + '</div>'
            + '<input type="text" name='+ workDayHours[i] + '" class="form-control" id="' + workDayHours[i] + '">' + '<div class="input-group-append">'
            + '<button class="btn btn-primary" value="#' + workDayHours[i] + '"><i class="fa fa-save"></i></button>'
            + '</div>' + '</div>'; blocks += hourBlocks;
        var inputRow = (".input-group");
        inputRow = (".form-control").valueOf;
        userActivity.push(inputRow);
    } 
    $('#time-blocks').append(blocks);
}

createTimeBlocks();


// button click event
$("#time-blocks").on("click", ".btn", function() {
    var userInput = $(this).val();
    var task =$(userInput).val();
    console.log(task)
    // why isnt task recording?
})
})

// $("button").on("click", function(e) {
//     e.preventDefault();
//     localStorage.setItem("inputValue",JSON.stringify(userActivity))});



//     var userActivity = JSON.parse(localStorage.getItem("inputValue"));

// });

// console.log(inputValue);

// hourly input for local storage
