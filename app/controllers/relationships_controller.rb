class RelationshipsController < ApplicationController
    
    def create
        user = User.find(params[:id])
        @current_user.follow(user)
        render json: user
    end

    def destroy
        user = Relationship.find_by({followed_id: params[:id], follower_id: params[:current_user_id]}).followed
        @current_user.unfollow(user)
    end

    def index
        render json: {message: "hello"}
    end

end
