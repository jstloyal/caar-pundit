class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :car_id
end
