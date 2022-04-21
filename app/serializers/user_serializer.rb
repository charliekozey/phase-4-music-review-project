class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews
  has_many :following
  has_many :followers
end
