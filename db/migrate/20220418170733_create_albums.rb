class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :artist
      t.string :spotify_artist_id
      t.string :album_art_url
      t.string :release_date
      t.integer :total_tracks
      t.integer :average_rating

      t.timestamps
    end
  end
end
