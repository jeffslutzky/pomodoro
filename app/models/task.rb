# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  pomodoros  :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Task < ActiveRecord::Base
  belongs_to :user


end
