//need to do listener for the entire container where the save button is which is labelled

//we want to add an onclick event that saves that event
//we want to add the event target, which will tell us which button (i.e. id hour-9 vs hour-11) was clicked on
function currentTime() {
    const current = moment().format("MM Do YYYY, h:mm:ss a");
    $("#today").text(current);
}

function saveText(inputElement)