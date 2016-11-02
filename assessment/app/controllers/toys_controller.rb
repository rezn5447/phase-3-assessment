class ToysController < ApplicationController
  before_action :set_pet
  def index
    @toys = @pet.toys.all
    render json: @toys
  end

  def show
  end

  private
  def set_pet
    @pet = Pet.find(params[:pet_id])
  end
end
