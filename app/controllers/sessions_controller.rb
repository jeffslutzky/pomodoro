class SessionsController < ApplicationController

  def new
    require 'statsd'
    statsd = Statsd.new
    start_time = Time.now
    duration = Time.now - start_time
    statsd.histogram('web.page_views', duration)
  end

  def create
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      log_in(user)
      redirect_to user_path(current_user.id)
    else
      flash.now[:alert] = "We don't seem to know that user. Please try logging in again, or click \"Sign up\" if you are a new user."
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end

end
