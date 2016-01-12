class AddPomodoroColumnToTaskTable < ActiveRecord::Migration
  def change
    change_column :tasks, :pomodoros, :integer, default: 0
  end
end
