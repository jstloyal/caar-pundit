class CarSerializer
  include JSONAPI::Serializer
  attributes :name, :year, :image_url, :slug, :average_score

  has_many :reviews
end
