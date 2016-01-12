class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      log_in(user)
      redirect_to user_path(current_user.id)
    else
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end

end
