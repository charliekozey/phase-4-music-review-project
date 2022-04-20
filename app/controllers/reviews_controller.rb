class ReviewsController < ApplicationController
    skip_before_action :authorized, only: :get_highest_rated_albums
    def get_highest_rated_albums
        top_albums = Review.highest_rated
        render json: top_albums 
    end
end
