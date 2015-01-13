class RemoveBrandFromProduct < ActiveRecord::Migration
  def change
    remove_column :products, :brand
  end
end
