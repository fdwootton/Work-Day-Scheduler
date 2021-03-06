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

function saveNewContent () {
    // const newContent = user input
    // make user input the text content of the time block description box
    // save to local storage
}





// ---------CALL FUNCTIONS------------

displayDate();

updateTimeBlocks();








// --------EVENT LISTENERS------------

// Add click event for save button, then call saveNewContent ()