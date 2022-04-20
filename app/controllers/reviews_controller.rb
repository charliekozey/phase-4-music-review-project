class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    skip_before_action :authorized, only: :get_highest_rated_albums
    
    def get_highest_rated_albums
        top_albums = Review.highest_rated
        render json: top_albums 
    end

    def create
        review = Review.create!(reviews_param)
        render json: review, status: :created
    end

    private

    def reviews_param
        params.permit(:rating, :review_text, :user_id, :album_id)
    end

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {errors: ["Review not found"]}, status: :not_found
    end
end
