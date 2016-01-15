class TimersController < ApplicationController

  def new
  end

  def create
    timer = Timer.new
    timer.task = Task.find(params[:task_id])
    @task_id = params[:task_id]
    timer.task.save
    timer.save
    respond_to do |format|
      format.js {render 'create'}
    end
  end

  def save
    binding.pry
  end

  private

  def timer_params
    params.require(:timer).permit(:task.id)
  end

end
