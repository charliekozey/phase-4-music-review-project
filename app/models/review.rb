class Review < ApplicationRecord
  belongs_to :user
  belongs_to :album

  def self.highest_rated
    #returns array of album ratings, highest to lowest
    Review.all.sort_by {|r| -r.rating }.first(2) 
    #need to change to 5? instead of 2
  end
end
