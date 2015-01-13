# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string
#  description :string
#  price       :decimal(8, 2)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  year        :integer
#  location    :string
#  image_url   :string
#

class Product < ActiveRecord::Base

  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true
  validates :year, presence: true
  validates :location, presence: true
  validates :image_url, presence: true

  has_many :favorites
  has_many :users, through: :favorites

end
