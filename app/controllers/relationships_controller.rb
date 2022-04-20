class RelationshipsController < ApplicationController
    
    def create
        user = User.find(params[:followed_id])
        @current_user.follow(user)
        render json: user
    end

    def destroy
        user = Relationship.find(params[:id]).followed
        @current_user.unfollow(user)
    end

    def index
        render json: {message: "hello"}
    end

end
