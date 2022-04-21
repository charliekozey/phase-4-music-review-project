class Review < ApplicationRecord
  belongs_to :user
  belongs_to :album

  validates :user, uniqueness: {scope: :album}
  validates :review_text, presence: true
  validates :rating, presence: true

  def self.highest_rated
    #returns array of album ratings, highest to lowest
    rev = Review.all.sort_by {|r| -r.rating }.first(5) 
    rev.map { |r| r.album }
    
    #need to change to 5? instead of 2
  end
end
