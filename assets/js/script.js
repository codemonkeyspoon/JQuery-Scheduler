$(document).ready(function() {
  // TODO: Add a listener for click events on the save button.
  $(".saveBtn").on("click", function() {
    // Use the id in the containing time-block as a key to save the user input in local storage
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
  });

  // TODO: Add code to apply the past, present, or future class to each time block
  const currentHour = dayjs().hour(); // Get the current hour using Day.js
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]); // Get the hour from the id
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    console.log(currentHour)
  });

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements
  $(".description").each(function() {
    var key = $(this).parent().attr("id");
    $(this).val(localStorage.getItem(key));
  });

  // TODO: Add code to display the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});







