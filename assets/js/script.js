const currentDate = document.getElementById("currentDay");

function displayDate() {
    const todayDate = moment().format('MMMM DD, YYYY');
    const dayoftheWeek = moment().format('dddd');
    currentDate.textContent = todayDate + " - " + dayoftheWeek;
};

displayDate();



// function setCurrentDate () {
//     let currentMoment = moment().format('MMMM Do YYYY');
//     currentDate.innerHTML = "<p>" + currentMoment + "<p>";
// }

// setCurrentDate();

function setCurrentTimeBlock () {
    // if moment() === present, then background color red
    // if moment () > present, its the past, then background color gray and disable?
    // if moment () < presenttime, its the future, then background color green
}


function saveNewContent () {
    // make user input the text content of the time block description box
}


// Add click event for save button, then call saveNewContent ()


