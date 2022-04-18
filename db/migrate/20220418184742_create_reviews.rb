class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :review_text
      t.references :user, null: false, foreign_key: true 
      t.references :album, null: false, foreign_key: true 
      t.timestamps
    end
  end
end
