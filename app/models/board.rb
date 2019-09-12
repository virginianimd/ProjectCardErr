class Board < ApplicationRecord
  belongs_to :user
  has_many :lists
  scope :title, -> (title) { where title: title }

end
