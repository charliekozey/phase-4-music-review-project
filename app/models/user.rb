class User < ApplicationRecord
    has_many :relationships
    has_many :reviews
    has_many :albums, through: :reviews
    
    has_secure_password
end
