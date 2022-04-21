class RemoveAverageRatingFromAlbums < ActiveRecord::Migration[6.1]
  def change
    remove_column :albums, :average_rating, :integer
  end
end
