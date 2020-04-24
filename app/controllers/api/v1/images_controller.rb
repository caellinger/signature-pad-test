class Api::V1::ImagesController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  require "base64"
  require 'securerandom'

  def index
    render json: Image.all
  end

  def show
    render json: Image.find(params[:id])
  end

  def create
    data_uri = params[:image]
    encoded_image = data_uri.split(",")[1]
    decoded_image = Base64.decode64(encoded_image)
    file_path = SecureRandom.uuid
    File.open("/Users/christieellinger/Downloads/breakable-toy/signature-pad-test/public/images/#{file_path}.jpeg", "wb") { |f| f.write(decoded_image) }
    image = Image.new(image: "#{file_path}.jpeg")
    if image.save
    else
      render json: { error: image.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
