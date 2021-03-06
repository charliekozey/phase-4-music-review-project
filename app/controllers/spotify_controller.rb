class SpotifyController < ApplicationController

    skip_before_action :authorized, only: :get_albums

    RSpotify.raw_response = true

    def get_albums
        albums = RSpotify::Album.search(query_params[:q].to_s, limit: 10)
        render json: albums
    end

    private
    def query_params
        puts params[:q].to_s
        params.permit(:q)
    end
end
