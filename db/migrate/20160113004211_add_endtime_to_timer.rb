class AddEndtimeToTimer < ActiveRecord::Migration
  def change
    add_column :timers, :end_time, :datetime
  end
end
