Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/images', to: "homes#index"
  get '/images/:id', to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :images, only: [:index, :show, :create]
    end
  end
end
