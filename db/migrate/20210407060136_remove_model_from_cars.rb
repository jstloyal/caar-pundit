class RemoveModelFromCars < ActiveRecord::Migration[6.1]
  def change
    remove_column :cars, :model, :string
  end
end
