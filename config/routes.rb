Rails.application.routes.draw do
  
  resources :albums, only: [:show, :create]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :relationships
  # resources :users, only: [:show, :create]
  resources :users do
    member do
      get :following, :followers, :other_user
    end
  end

  post "/queried_albums", to: "spotify#get_albums"
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/highest_rated_albums", to: "reviews#get_highest_rated_albums"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
