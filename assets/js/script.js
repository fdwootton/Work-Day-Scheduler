const currentDate = document.getElementById("currentDay");
const currentHour = moment().hour();


function displayDate() {
    const todayDate = moment().format('MMMM DD, YYYY');
    const dayoftheWeek = moment().format('dddd');
    currentDate.textContent = todayDate + " - " + dayoftheWeek;
};

displayDate();
// console.log(currentHour);



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

setCurrentTimeBlock();


function saveNewContent () {
    // make user input the text content of the time block description box
}


// Add click event for save button, then call saveNewContent ()


