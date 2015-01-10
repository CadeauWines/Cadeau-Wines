class RemoveLocationCoordinatesFromProdut < ActiveRecord::Migration
  def change
    remove_column :products, :latitude
    remove_column :products, :longitude
  end
end
