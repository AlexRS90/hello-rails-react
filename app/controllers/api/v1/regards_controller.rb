class Api::V1::RegardsController < ApplicationController
  def index
    regards = Regard.find(Regard.pluck(:id).sample)
    render json: regards.to_json
  end
end
