let today = moment().format("MMMM Do YYYY");
let currentHour = moment().format("HH");
let thisHour = parseInt(currentHour);

function blockConditions() {
  var currentHour = moment().hours();
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    // Set colors based on current hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

// create array to store user events that are put in
var allEvents = [];

// Get user event from local storage
function getEvents() {
  let getEvents = JSON.parse(localStorage.getItem("events"));
  if (getEvents !== null) allEvents = getEvents;
  $(getEvents).each(function () {
    $("textarea#" + this.hour).val(this.event);
  });
}

//we want to add an onclick event that saves that event
// Store user event to local storage
function postEvents() {
  localStorage.setItem("events", JSON.stringify(allEvents));
}
//we want to add the event target, which will tell us which button (i.e. id hour-9 vs hour-11) was clicked on
//need to do listener for the entire container where the save button is which is labelled
$(function () {
  blockConditions();
  $("#currentDay").text(today);
  //function to save text (input element)
  getEvents();
  $(".saveBtn").on('click', function () {
    var myTime = $(this).siblings("textarea").attr("id");
    var myEvent = $(this).siblings("textarea").val();

    const calendarEvent = {
      hour: myTime,
      event: myEvent,
    };
    allEvents.push(calendarEvent);
    postEvents();
  });
});

//save button saves the input
document.querySelectorAll('.saveBtn').forEach(function (saveBtn) {
    saveBtn.addEventListener('click', postEvents);
  });

//the below is so that the values stay after refreshing
$('#hour-9 .myEvent').val(localStorage.getItem('hour-9'));
$('#hour-10 .myEvent').val(localStorage.getItem('hour-10'));
$('#hour-11 .myEvent').val(localStorage.getItem('hour-11'));
$('#hour-12 .myEvent').val(localStorage.getItem('hour-12'));
$('#hour-13 .myEvent').val(localStorage.getItem('hour-13'));
$('#hour-14 .myEvent').val(localStorage.getItem('hour-14'));
$('#hour-15 .myEvent').val(localStorage.getItem('hour-15'));
$('#hour-16 .myEvent').val(localStorage.getItem('hour-16'));
$('#hour-17 .myEvent').val(localStorage.getItem('hour-17'));