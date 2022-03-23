class Api::V1::RegardsController < ApplicationController
  def index
    regards = Regard.all
    render json: regards
  end
end
