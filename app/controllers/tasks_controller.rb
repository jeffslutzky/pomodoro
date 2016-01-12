class TasksController < ApplicationController

  def new
  end

  def create
    if request.xhr?
      task = Task.create(task_params)
      binding.pry
      html_string = render_to_string "tasks/_task", locals: {task: task}, layout: false
      render json: {template: html_string}
    end
  end

  def edit
  end

  def update
    task = Task.find(params[:id])
    task.name = task_params[:name]
    task.save
    html_string = render_to_string "tasks/_task", locals: {task: task}, layout: false
    render json: {template: html_string}
  end

  def show
  end

  def index
    @user = current_user
    @task = Task.new
  end

  def destroy
    @task = Task.find(params[:id])
    @data_id = @task.id
    @task.destroy
    respond_to do |format|
      format.html { redirect_to user_path(current_user.id) }
      format.js { render "destroy", :locals => { :id => @data_id} }
    end
  end

  private

  def task_params
    params.require(:task).permit(:user_id, :pomodoros, :name)
  end


end
