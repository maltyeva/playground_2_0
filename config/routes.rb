Rails.application.routes.draw do
  root 'welcome#index'
  resources :media
  resources :media_uploads, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
