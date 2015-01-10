class AddYearAndLocationToProduct < ActiveRecord::Migration
  def change
    add_column :products, :year, :integer
    add_column :products, :location, :string
  end
end
