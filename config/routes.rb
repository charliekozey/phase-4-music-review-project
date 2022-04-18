Rails.application.routes.draw do
  
  resources :albums
  resources :reviews
  resources :relationships
  resources :users

  get "/queried_albums", to: "spotify#get_albums"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
