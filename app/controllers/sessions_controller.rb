class SessionsController < ApplicationController
  before_action :get_time

  def new
    require 'statsd'
    statsd = Statsd.new
    duration = Time.now - @start_time
    # statsd.histogram('database.query.time', duration, :tags => ['page:main'])
    statsd.increment('web.page_views')
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


private
  def get_time
    @start_time = Time.now
  end

end
