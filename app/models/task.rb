# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Task < ActiveRecord::Base
  belongs_to :user
  has_many :timers

end
