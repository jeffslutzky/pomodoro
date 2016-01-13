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
    // increase displayed number of pomodoros by 1
    var newNum = parseInt($(this).parents(".task_form").children(".pomodoros").html()) + 1
    $(this).parents(".task_form").children(".pomodoros").html(newNum)
    // timer
    var count = 5;
    var counter = setInterval(timer, 1000);
    function timer(){
      count = count - 1;
      if (count <= 0) {
        clearInterval(counter);
        alert("Time's up!");
        return;
      }
      $("#timer").html(count + " secs");
    }
  })

})
