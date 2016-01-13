$(function(){
  //click on task name to update/change it
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

    // add 1 to displayed number of pomodoros
    var newNum = parseInt($(this).parents(".task_form").children(".pomodoros").html()) + 1
    $(this).parents(".task_form").children(".pomodoros").html(newNum)

    // timer
    timer = $(this).parent().siblings("#timer");
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

        // get the timer for the right task

        timer.html(currentMinutes + ":" + currentSeconds);
        if (secs > -1) {
          setTimeout(countdown, 1000);
        } else {
          alert("Time's up!");
          timer.html("");
        }
    }


  })

})
