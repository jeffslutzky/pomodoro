$(function(){

  $(".new_task").on("ajax:success", function(event, data, status, xhr){
    $(this).find("input:text").val("");
    var template = $(data.template);
    $(".container").append(template);
  })


  $(".container").on("blur", ".edit_task", function(){
    $(this).submit();
  })


  $(".container").on("ajax:success", ".edit_task", function(event, data, status, xhr){
    // get the updated task name
    newName = $(data.template).find(".task_name").html();
    // change task name in HTML to the new name
    $(this).parents(".task_parent").find(".task_name").html(newName);
    // hide the editing form and no longer hide the name
    $(this).parents(".task_parent").addClass("hide_form");
    $(this).parents(".task_parent").removeClass("hide_name");
  })


// show editing form when task name is clicked
  $(".container").on("click", ".task_name", function(){
    $(this).parents(".task_parent").addClass("hide_name");
    $(this).parents(".task_parent").removeClass("hide_form");
  })


  $(".container").on("click", ".start_button", function(){
    // hide all start buttons to avoid multiple pomodoros
    $(".start_button").addClass("hide_start_button");
    $(".timer").html("<br/>");

    // get displayed number of pomodoros
    var total = parseInt($(this).parents(".task_form").children(".pomodoros").html());
    var newTotal = total;
    var self = $(this);

    // countdown timer
    timer = $(this).parent().siblings(".timer");
    var secs = 4; // change to 25
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
        // on completion, add 1 to displayed number of pomodoros, remove timer, restore start buttons
        self.parents(".task_form").children(".pomodoros").html(newTotal);
        timer.html("");
        $(".start_button").removeClass("hide_start_button");
        $(".timer").html("");
      }
    }
  })

})
