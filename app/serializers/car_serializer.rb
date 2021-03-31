class CarSerializer
  include JSONAPI::Serializer
  attributes :name, :model, :image_url, :slug

  has_many :reviews
end
