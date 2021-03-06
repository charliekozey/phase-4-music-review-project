class AlbumsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    skip_before_action :authorized, only: [:show, :create, :get_highest_rated_albums]

    def get_highest_rated_albums
        top_albums = Album.highest_rated
        render json: top_albums 
    end

    def show
        album = Album.find(params[:id])
        render json: album, include: ['reviews', 'reviews.user'], status: :ok
    end

    def create
        album = Album.find_by(spotify_id: params[:spotify_id])
        if album
            render json: album, status: :ok
        else
            album = Album.create!(albums_param)
            render json: album, status: :created
        end
    end

    private

    def albums_param
        params.permit(:title, :artist, :album_art_url, :total_tracks, :release_date, :spotify_id)
    end

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {errors: ["Album not found"]}, status: :not_found
    end
end
