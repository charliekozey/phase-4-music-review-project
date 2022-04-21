class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    skip_before_action :authorized, only: [:get_highest_rated_albums, :index, :show]
    
    def get_highest_rated_albums
        top_albums = Review.highest_rated
        render json: top_albums 
    end

    def create
        review = Review.create!(reviews_param)
        render json: review, status: :created
    end

    def index
        render json: Review.all, status: 200
    end

    def show
        review = Review.find(params[:id])
        if review
            render json: review, status: 200
        else
            render json: {errors:["Review not found"]}, status: 422
        end
    end

    def update
        review = Review.find_by(id: params[:id])
        if review
            review.update(update_reviews_param)
            render json: review
        else
            render json: { error: "Review not found" }, status: :not_found
        end
    end

    def destroy
        review = Review.find(params[:id])
        if review
            review.destroy
            head :no_content        
        else
            render json: {errors:["Episode not found"]}, status: 422
        end
    end

    private

    def reviews_param
        params.permit(:rating, :review_text, :user_id, :album_id)
    end

    def update_reviews_param
        params.permit(:rating, :review_text, :album_id)
    end

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {errors: ["Review not found"]}, status: :not_found
    end
end
