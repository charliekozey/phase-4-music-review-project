class Album < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :spotify_id, uniqueness: true

    def average_rating
        if self.reviews.length > 0
            self.reviews.average(:rating)
        else
            0.0
        end
    end

    def self.highest_rated
        #returns array of album ratings, highest to lowest
        albums = Album.all.sort_by {|a| -a.average_rating }.first(5) 
        #need to change to 5? instead of 2
      end
end
