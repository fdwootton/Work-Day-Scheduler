// Sets saved tasks in corresponding time blocks when page loads/refreshed
$().ready(function () {

    $("#hour9").val(localStorage.getItem("9"));
    $("#hour10").val(localStorage.getItem("10"));
    $("#hour11").val(localStorage.getItem("11"));
    $("#hour12").val(localStorage.getItem("12"));
    $("#hour13").val(localStorage.getItem("13"));
    $("#hour14").val(localStorage.getItem("14"));
    $("#hour15").val(localStorage.getItem("15"));
    $("#hour16").val(localStorage.getItem("16"));
    $("#hour17").val(localStorage.getItem("17"));

    console.log(localStorage.getItem("9"));

});



//--------------------------FUNCTIONS------------------------------------


// displays the current date and day of the week in the header
function displayDate() {
    const currentDate = $("#currentDay");
    const todayDate = moment().format('MMMM DD, YYYY');
    const dayoftheWeek = moment().format('dddd');
    currentDate.text(todayDate + " - " + dayoftheWeek);
};




// color codes each time block based on past, present, or future
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



// -----------------------------CALL FUNCTIONS--------------------------------

displayDate();

updateTimeBlocks();


// Calls the updateTimeBlock function every second, so that time block colors are updated according to current time,
// even if page hasn't been refreshed
setInterval(updateTimeBlocks, 1000);



// ---------------------------EVENT LISTENERS----------------------------------

// saves text typed into the textarea to local storage when save button clicked
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var task = $(this).siblings(".description").val();
    var hour = $(this).siblings(".description").attr("data-time");
    console.log(hour);
    localStorage.setItem(hour, task);
});



// renders a blank work schedule
$("#clearBtn").on("click", function (event){

    event.preventDefault();

    localStorage.clear();

    $("#hour9").val("");
    $("#hour10").val("");
    $("#hour11").val("");
    $("#hour12").val("");
    $("#hour13").val("");
    $("#hour14").val("");
    $("#hour15").val("");
    $("#hour16").val("");
    $("#hour17").val("");
});