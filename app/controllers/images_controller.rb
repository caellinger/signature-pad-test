class ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def show
    # overview we want to take an image ID from the frontend and return the image blob associated with that image

    # step 1 get image id
    # step 2 load image record from DB so we can get the file path
    # step 3 open the file using the path we got from the db
    # step 4 serialize (Base64 encode) the image
    # step 5 return the image blob string to the client

    image_record = Image.find(params[:id])
    file = File.open("#{image_record.image}"")
    blob = file.read
    encoded_image = Base64.decode64(blob)
    @image = 'data:image/jpeg;base64' + encoded_string
  end
end
