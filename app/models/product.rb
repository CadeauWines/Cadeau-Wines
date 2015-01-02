# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string
#  description :string
#  brand       :string
#  price       :decimal(8, 2)
#  latitude    :decimal(10, 6)
#  longitude   :decimal(10, 6)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ActiveRecord::Base

  validates :name, presence: true
  validates :description, presence: true
  validates :brand, presence: true
  validates :price, presence: true

  has_many :favorites
  has_many :users, through: :favorites

end
