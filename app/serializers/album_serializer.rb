class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :spotify_artist_id, :album_art_url, :release_date, :total_tracks, :average_rating
  has_many :reviews
end
