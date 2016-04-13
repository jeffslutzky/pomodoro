class StaticPagesController < ApplicationController
  before_action :get_time

  def about
    require 'statsd'
    statsd = Statsd.new
    # duration = Time.now - @start_time
    statsd.increment('web.page_views', :tags => ['page:about'])
  end

  def contact
    require 'statsd'
    statsd = Statsd.new
    # duration = Time.now - @start_time
    statsd.increment('web.page_views', :tags => ['page:contact'])
  end

private
  def get_time
    @start_time = Time.now
  end

end