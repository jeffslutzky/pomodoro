$(function(){
  //click on task name to update/change it
  $(".update").click(function(){
    $(this).parent().addClass("editing");

  })

  $(".new_task").on("ajax:success", function(event, data, status, xhr){
    $(this).find("input:text").val("");
    var template = $(data.template);
    debugger;
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
    alert("New pomodoro created.")
  })
})
