# == Schema Information
#
# Table name: timers
#
#  id         :integer          not null, primary key
#  task_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Timer < ActiveRecord::Base
  belongs_to :task

end
