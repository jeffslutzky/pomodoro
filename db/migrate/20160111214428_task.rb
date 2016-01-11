class Task < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.integer :pomodoros

      t.timestamps null: false
    end
  end
end
