class SpotifyController < ApplicationController

    RSpotify.raw_response = true

    def get_albums
        albums = RSpotify::Album.search(params[:q])
        render json: albums
    end
end
