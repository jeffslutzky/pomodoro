class TimersController < ApplicationController

  def new
  end

  def create
    respond_to do |format|
      format.js
    end
  end

  def save
    timer = Timer.new
    timer.task = Task.find(params[:task_id])
    timer.task.save
    timer.save
    redirect_to user_path(current_user)
  end

  private

  def timer_params
    params.require(:timer).permit(:task.id)
  end

end
