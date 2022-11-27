let today = moment().format("MMMM Do YYYY");
let currentHour = moment().format("HH");
let thisHour = parseInt(currentHour);

var hour9 = document.getElementById('hour-9');
var hour10 = document.getElementById('hour-10');
var hour11 = document.getElementById('hour-11');
var hour12 = document.getElementById('hour-12');
var hour13 = document.getElementById('hour-13');
var hour14 = document.getElementById('hour-14');
var hour15 = document.getElementById('hour-15');
var hour16 = document.getElementById('hour-16');
var hour17 = document.getElementById('hour-17');

const businessHours = [
  parseInt(hour9),
  parseInt(hour10),
  parseInt(hour11),
  parseInt(hour12),
  parseInt(hour13),
  parseInt(hour14),
  parseInt(hour15),
  parseInt(hour16),
  parseInt(hour17),
];

//we want to add the event target, which will tell us which button (i.e. id hour-9 vs hour-11) was clicked on
function blockConditions() {
  // Set colors based on current hour
  $("textarea").each(function () {
    if (this.id < thisHour) {
      $(this).addClass("past");
    } else if (this.id === thisHour) {
      $(this).addClass("present");
    } else if (this.id > thisHour) {
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
  //function to saveText(inputElement)
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

document.querySelectorAll('.saveBtn').forEach(function (saveBtn) {
    saveBtn.addEventListener('click', postEvents);
  });


$('#hour-9 .myEvent').val(localStorage.getItem('hour-9'));
$('#hour-10 .myEvent').val(localStorage.getItem('hour-10'));
$('#hour-11 .myEvent').val(localStorage.getItem('hour-11'));
$('#hour-12 .myEvent').val(localStorage.getItem('hour-12'));
$('#hour-13 .myEvent').val(localStorage.getItem('hour-13'));
$('#hour-14 .myEvent').val(localStorage.getItem('hour-14'));
$('#hour-15 .myEvent').val(localStorage.getItem('hour-15'));
$('#hour-16 .myEvent').val(localStorage.getItem('hour-16'));
$('#hour-17 .myEvent').val(localStorage.getItem('hour-17'));

