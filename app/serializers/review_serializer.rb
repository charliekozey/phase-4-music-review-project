class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_text
  has_one :user
end
