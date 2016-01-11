class User < ActiveRecord::Base
  has_many :tasks

  validates_uniqueness_of :name
  validates_presence_of :name

end
