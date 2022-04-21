class Review < ApplicationRecord
  belongs_to :user
  belongs_to :album

  validates :user, uniqueness: {scope: :album}
  validates :review_text, presence: true
  validates :rating, presence: true

  def self.top_10_this_week
    Review.where('created_at >= ?', 1.week.ago.utc).sort_by {|r| -r.rating}.first(10) 
  end

  def self.most_recent
    Review.all.sort_by {|r| r.created_at}.reverse.first(10)
  end

end
