class ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def show
    image_record = Image.find(params[:id])
    file = File.open("#{image_record.image}"")
    blob = file.read
    encoded_image = Base64.decode64(blob)
    @image = 'data:image/jpeg;base64' + encoded_string
  end
end
