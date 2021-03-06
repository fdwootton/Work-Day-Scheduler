// --------GLOBAL VARIABLES --------------

const currentHour = moment().hour();






//------FUNCTION DECLARATIONS------------

function displayDate() {
    const currentDate = $("#currentDay");
    const todayDate = moment().format('MMMM DD, YYYY');
    const dayoftheWeek = moment().format('dddd');
    currentDate.text(todayDate + " - " + dayoftheWeek);
};

function setCurrentTimeBlock () {
    const hour = document.getElementsByClassName("hour");
    if (currentHour == 17) {
        console.log("It's working");
    };
    // if moment() === present, then background color red
    // if the current time is between the timeblock-time + timeblock-time + 59 minutes and 59 seconds, then its green

    // if moment () > present, its the past, then background color gray and disable?
    // if moment () < presenttime, its the future, then background color green
}

function saveNewContent () {
    // const newContent = user input
    // make user input the text content of the time block description box
    // save to local storage
}





// ---------CALL FUNCTIONS------------

displayDate();

setCurrentTimeBlock();








// --------EVENT LISTENERS------------

// Add click event for save button, then call saveNewContent ()