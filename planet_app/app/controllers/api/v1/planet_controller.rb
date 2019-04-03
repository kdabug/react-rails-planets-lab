class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find(params[:id])
    render json: @book, include: :authors, status: :ok
  end

  def create
    @planet = Planet.new(planet_params)
    if @planet.save
      redirect_to @planet
    end
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def update
    @planet = Planet.find(params[:id])
    if @planet.update_attributes(planet_params)
      redirect_to @planet
    end
  end

  def destroy
    @planet = Planet.find(params[:id])
    @planet.destroy
    redirect_to planets_path
  end

  private

  def planet_params
    params.require(:planet).permit(:name, :bio, :password)
  end
end
