class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]

    def create
        user = User.create!(user_params)
        render json: user
    end

    def show
        render json: @current_user
    end

    def other_user
        other_user = User.find(params[:id])
        render json: other_user, include: ['reviews', 'reviews.album', 'following', 'followers' ]
    end

    def following
        @title = "Following"
        @user  = User.find(params[:id])
        @users = @user.following
        render json: @users
    end
    
    def followers
        @title = "Followers"
        @user  = User.find(params[:id])
        @users = @user.followers
        render json: @users
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
