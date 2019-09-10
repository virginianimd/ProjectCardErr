Rails.application.routes.draw do
  resources :boards do
  resources :lists
  end
  resources :cards
  resources :boardmembers
  devise_for :users
  root to: "home#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
