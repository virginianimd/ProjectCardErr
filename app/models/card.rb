class Card < ApplicationRecord
    acts_as_list scope: :list
  
    belongs_to :list
    belongs_to :user
    belongs_to :board
  
    validates :name, presence: true
end
