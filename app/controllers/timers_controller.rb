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
        binding.pry
    redirect_to "users/show"
  end

  private

  def timer_params
    params.require(:timer).permit(:task.id)
  end

end
