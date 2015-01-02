class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string    :name
      t.string    :description
      t.string    :brand
      t.decimal   :price,           { precision: 8, scale: 2 }
      t.decimal   :latitude,        { precision: 10, scale: 6 }
      t.decimal   :longitude,       { precision: 10, scale: 6 }

      t.timestamps null: false
    end
  end
end
