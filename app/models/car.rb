class Car < ApplicationRecord
  has_many :reviews

  before_create :slugify

  validates_uniqueness_of :name

  def slugify
    self.slug = name.parameterize
  end

  def average_score
    return 0 unless reviews.count.positive?
    
    reviews.average(:score).round(2).to_f
  end
end
