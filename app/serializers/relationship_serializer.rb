class RelationshipSerializer < ActiveModel::Serializer
  attributes :id, :follower_id, :followed_id, :active_relationship, :passive_relationship
end
