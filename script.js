$(document).ready(function() {
  // Getting items from local storage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-1 .description').val(localStorage.getItem('hour-1'));
  $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  $('#hour-3 .description').val(localStorage.getItem('hour-3'));
  $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));

//Save button click listener
 $('.saveBtn').click(function() {
    //Getting the user time slot text
    description = $(this).siblings('.description').val();
    //Getting the time slot
    timeSlot = $(this).parent().attr('id');
    //Save text in local Storage
    localStorage.setItem(timeSlot, description);
 });

 function time() {
  
  // looping through each time slot
  $('.time-block').each(function() {
    // Getting each hour id by using parseInt() with the attribute of id then splitting hour- 
    timeBlock = parseInt($(this).attr('id').split('hour-')[1]);
    
    // get current time
    curTime = dayjs().hour();
    // setting color classes on each time slot depending on current time
    if(timeBlock < curTime) {
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    } else if (timeBlock === curTime) {
      $(this).removeClass('future');
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('present');
      $(this).removeClass('past');
      $(this).addClass('future');
    }
  });
 }

  //Time of Day
  setInterval(function() {
    $('#currentDay').text(dayjs().format('MMM-D h:mm A'));
  }, 100);

  time();
});
