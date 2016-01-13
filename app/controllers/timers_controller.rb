class TimersController < ApplicationController

  def new
  end

  def create
    timer = Timer.new
    timer.task = Task.find(params[:task_id])
    timer.task.pomodoros += 1
    timer.task.save
    timer.save
    respond_to do |format|
      # format.html
      format.js
    end
    # redirect_to user_path(timer.task.user)
    # render "users/show"
  end

  private

  def timer_params
    params.require(:timer).permit(:task.id)
  end

end
