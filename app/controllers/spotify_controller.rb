class SpotifyController < ApplicationController

    RSpotify.raw_response = true

    def get_albums
        albums = RSpotify::Album.search(query_params.to_s, limit: 10)
        puts query_params.to_s
        render json: albums
    end

    private
    def query_params
        params.permit(:q)
    end
end
