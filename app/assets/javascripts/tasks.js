$(function(){
  //click on task name to show update form
  $(".update").click(function(){
    $(this).parent().addClass("editing");
  })

  $(".new_task").on("ajax:success", function(event, data, status, xhr){
    $(this).find("input:text").val("");
    var template = $(data.template);
    $(".container").append(template);
  })

  $(".edit_task").on("ajax:success", function(event, data, status, xhr){
    var template = $(data.template);
    $(this).parents(".task_parent").find(".task_form").html($(template));
    $(this).parents(".task_parent").addClass("hide_form");
    $(this).parents(".task_parent").removeClass("hide_name");
  })

  $(".task_name").click(function(){
    $(this).parents(".task_parent").addClass("hide_name");
    $(this).parents(".task_parent").removeClass("hide_form");
  })

  $("form.edit_task input:text").blur(function(){
    $(this).submit();
  })

  $(".timer_button").click(function(){

    // get displayed number of pomodoros
    var total = parseInt($(this).parents(".task_form").children(".pomodoros").html());
    var newTotal = total;
    var self = $(this);

    // countdown timer
    timer = $(this).parent().siblings(".timer");
    var mins = .1; // change to 25
    var secs = mins * 60;
    var currentSeconds = 0;
    var currentMinutes = 0;
    setTimeout(countdown, 1000);
    function countdown() {
      currentMinutes = Math.floor(secs / 60);
      currentSeconds = secs % 60;
      if (currentSeconds <= 9) {
        currentSeconds = "0" + currentSeconds;
      }
      secs--;
      timer.html(currentMinutes + ":" + currentSeconds);
      if (secs > -1) {
        setTimeout(countdown, 1000);
      } else {
        newTotal++;
        // take a longer break every 4th pomodoro
        if (newTotal % 4 === 0) {
          alert("You deserve a longer break! Take 25-30 minutes!");
        } else {
          alert("Time for a 5-minute break!");
        }
        // on completion, add 1 to displayed number of pomodoros and remove timer
        self.parents(".task_form").children(".pomodoros").html(newTotal);
        timer.html("");
      }
    }
  })

})
