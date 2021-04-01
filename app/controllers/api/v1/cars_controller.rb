module Api
  module V1
    class CarsController < ApplicationController
      protect_from_forgery with: :null_session
      
      # GET /api/v1/cars
      def index
        cars = Car.all

        render json: CarSerializer.new(cars, options).serializable_hash
      end

      def show
        car = Car.find_by(slug: params[:slug])

        render json: CarSerializer.new(car, options).serializable_hash
      end

      def create
        car = Car.new(car_params)

        if car.save
          render json: CarSerializer.new(car).serializable_hash
        else
          render json: { error: car.errors.messages }, status: 422
        end
      end

      def update
        car = Car.find_by(slug: params[:slug])

        if car.update(car_params)
          render json: CarSerializer.new(car, options).serializable_hash
        else
          render json: { error: car.errors.messages }, status: 422
        end
      end

      def destroy
        car = Car.find_by(slug: params[:slug])

        if car.destroy
          head :no_content
        else
          render json: { error: car.errors.messages }, status: 422
        end
      end

      private

      def car_params
        params.require(:car).permit(:name, :model, :image_url)
      end

      def options
        @options ||= { include: %i[reviews] }
      end
    end
  end
end
