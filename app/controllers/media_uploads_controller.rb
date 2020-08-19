class MediaUploadsController < ApplicationController
  def create
    params[:media].each do |blob|
      Medium.create(media: blob)
    end
    redirect_to media_path
  end
end
