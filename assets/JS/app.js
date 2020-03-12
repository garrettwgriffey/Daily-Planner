$(document).ready(function () {
    var nowMoment = moment();
    var currentHour = moment().hour();

    // time and date
    $("#displayMoment").text(nowMoment);
   
    var userActivity = [];


    var workDayHours = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];

    // input boxes
    function createTimeBlocks() {
        let blocks = "";
        for (let i = 0; i < workDayHours.length; i++) {
            var hourBlocks = "" + '<div class="input-group mb-3">'
                + '<div class="input-group-prepend">' + '<span class="input-group-text">' + workDayHours[i] + '</span>' + '</div>'
                + '<input type="text" name=' + workDayHours[i] + '" class="form-control" id="' + workDayHours[i] + '">' + '<div class="input-group-append">'
                + '<button class="btn btn-primary" value="' + workDayHours[i] + '"><i class="fa fa-save"></i></button>'
                + '</div>' + '</div>'; blocks += hourBlocks;
            var inputRow = (".input-group");
            inputRow = (".form-control").valueOf;
            userActivity.push(inputRow);
        }
        $('#time-blocks').append(blocks);
    }

    createTimeBlocks();


    // button click event
    // $("#time-blocks").on("click", ".btn", function (e) {
    //     var userInput = $(this).val();
    //     var task = document.getElementById(userInput).value;
    //     console.log(task);
    // });
    
    // $("button").on("click", function(e) {
    //     e.preventDefault();
    //     localStorage.setItem("form-control", JSON.stringify(userActivity))
    // });
    
    var userActivity = JSON.parse(localStorage.getItem("userInput"));
    
    //colored input fields
   
        for (i = 0; i < workDayHours.length; i++) {

            if (currentHour === workDayHours[i]) {
                $("#" + workDayHours[i]).addClass('present');
            }
            if (currentHour > workDayHours[i]) {
                $("#" + workDayHours[i]).addClass('past');
            }
            if (currentHour < workDayHours[i]) {
                $("#" + workDayHours[i]).addClass('future');
            }

        }

// i started to go this route with individual time inputs but tried to do it more concisely above with no success
        $("#8:00am").on('click', function () {
            var userInput = $("#8:00am-input").val();;
            console.log(userInput)
            localStorage.setItem("8:am", userInput)
        })
        $("#9am").on('click', function () {
            var userInput = $("#9am-input").val();;
            console.log(userInput)
            localStorage.setItem("9am", userInput)
        })
        $("#10am").on('click', function () {
            var userInput = $("#10am-input").val();;
            console.log(userInput)
            localStorage.setItem("10am", userInput)
        })

});



