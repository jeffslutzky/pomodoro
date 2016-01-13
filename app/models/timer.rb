# == Schema Information
#
# Table name: timers
#
#  id         :integer          not null, primary key
#  task_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  end_time   :datetime
#

class Timer < ActiveRecord::Base
  belongs_to :task

  def end_time
    self.created_at + (25*60)
  end

  


end
