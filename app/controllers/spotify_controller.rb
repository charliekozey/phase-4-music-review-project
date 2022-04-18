class SpotifyController < ApplicationController
    def get_albums
        albums = RSpotify::Album.search(params[:q], limit: 10)
        render json: albums  
    end
end