class Album < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :spotify_id, uniqueness: true
end
