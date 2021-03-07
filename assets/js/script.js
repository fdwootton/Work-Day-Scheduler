//------FUNCTION DECLARATIONS------------

function displayDate() {
    const currentDate = $("#currentDay");
    const todayDate = moment().format('MMMM DD, YYYY');
    const dayoftheWeek = moment().format('dddd');
    currentDate.text(todayDate + " - " + dayoftheWeek);
};


function updateTimeBlocks () {

    const currentHour = moment().hour();
    const taskBox = $(".description");

    taskBox.each(function(){
        const taskBoxHour = parseInt($(this).attr("data-time"));

        if (currentHour === taskBoxHour) {
            $(this).removeClass("past future").addClass("present");
        };

        if (currentHour > taskBoxHour) {
            $(this).removeClass("present future").addClass("past");
        };

        if (currentHour < taskBoxHour) {
            $(this).removeClass("present past").addClass("future");
        };
    });
};


// function updateTasks () {
//     
// }


function saveNewTask () {
    
    $(".saveBtn").each(function () {

        var task = $(this).siblings(".description").val();
        var time = $(this).siblings(".description").attr("data-time");

        localStorage.setItem(time, task);

        setTasks();

    })
};


function setTasks () {
    $("#hour9 .description").val(localStorage.getItem("8"));
    $("#hour10 .description").val(localStorage.getItem("9"));
    $("#hour11 .description").val(localStorage.getItem("10"));
    $("#hour12 .description").val(localStorage.getItem("11"));
    $("#hour13 .description").val(localStorage.getItem("12"));
    $("#hour14 .description").val(localStorage.getItem("13"));
    $("#hour15 .description").val(localStorage.getItem("14"));
    $("#hour16 .description").val(localStorage.getItem("15"));
    $("#hour17 .description").val(localStorage.getItem("16"));
};



// CLEAR LOCAL STORAGE FOR A NEW DAY

    // const newContent = user input
    // make user input the text content of the time block description box
    // save to local storage



// for EACH timeblock, event delegation to save button
// this save button for this time block

// $(".saveBtn").on("click", function () {
//     // Get nearby values of the description in JQuery
//     var text = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");

//     // Save text in local storage
//     localStorage.setItem(t text);
// })


// ---------CALL FUNCTIONS------------

displayDate();

updateTimeBlocks();

setInterval(updateTimeBlocks, 1000);

$(".saveBtn").click(saveNewTask);




// --------EVENT LISTENERS------------

$(".saveBtn").on("click", saveNewTask);

// Add click event for save button, then call saveNewContent ()