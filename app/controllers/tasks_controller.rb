class TasksController < ApplicationController

  def new
  end

  def create
    @task = Task.create(task_params)
    @task.user = current_user
    @task.save
    respond_to do |format|
      format.html { redirect_to user_tasks_path(current_user.id) }
      format.js { }
    end
  end

  def edit
  end

  def update
  end

  def show
  end

  def index
    @user = current_user
    @task = Task.new
  end

  def destroy
  end

  private

  def task_params
    params.require(:task).permit(:user_id, :pomodoros, :name)
  end


end
