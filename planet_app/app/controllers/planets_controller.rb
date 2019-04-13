class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
    render json: @planets
  end

  def show
    @planet = Planet.find(params[:id])
    render json: @planet
  end

  def create
    @planet = Planet.new(planet_params)
    if @planet.save
      render json: @planet, status: :created
    else
      render json: { errors: @planet.errors }, status: :unprocessable_entity
    end
  end

  def update
    @planet = Planet.find(params[:id])
    if @planet.update(planet_params)
      render json: @planet, status: :ok
    else
      render json: { errors: @planet.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @planet = Planet.find(params[:id])
    @planet.destroy
    head 204
  end

  private

  def planet_params
    params.require(:planet).permit(:name, :distance_from_sun, :diameter, :orbit_period)
  end
end
