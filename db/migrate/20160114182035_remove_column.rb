class RemoveColumn < ActiveRecord::Migration
  def change
    remove_column :tasks, :pomodoros
  end
end
