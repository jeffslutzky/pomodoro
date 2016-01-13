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

require 'test_helper'

class TimerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
