# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

cars = Car.create([
  { 
    name: "Toyota Camry",
    year: 2020,
    image_url: "https://blogmedia.dealerfire.com/wp-content/uploads/sites/367/2017/09/Origin-of-the-Toyota-Logo_o.jpg"
  }, 
  { 
    name: "Honda Civic",
    year: 2020,
    image_url: "https://i.pinimg.com/originals/d3/07/24/d307240f175472b1f88b2f6a9c193029.jpg"
  },
  { 
    name: "Peugoet 508",
    year: 2020,
    image_url: "https://banner2.cleanpng.com/20180515/rwq/kisspng-peugeot-207-peugeot-308-car-peugeot-ion-5afaa3f1d71ca9.3528755915263754098811.jpg" 
  }, 
  { 
    name: "Mercedes Benz G-Wagon",
    year: 2020,
    image_url: "https://icon2.cleanpng.com/20171220/vte/mercedes-logo-png-5a3aaf46d69175.3260781815137953988789.jpg" 
  }, 
  { 
    name: "BMW X5",
    year: 2020,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3_-ao50EZ2JyGxZ92CCoOPj9BmMVZmK7UA-OXmyrmgCYLHBa-VA4qJ5lVaprns5n7WY&usqp=CAU" 
  }, 
  { 
    name: "Ford Focus",
    year: 2020,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnwEMKEjSlSfM589J9k19Ie38VyXt_cyR_tfVbsojmdC6jDa7ytMg_QDA-0C1hW07sZs&usqp=CAU" 
  }
])

reviews = Review.create([
  {
    title: 'Great car',
    description: 'It is very fuel efficient',
    score: 5,
    car: cars.first
  },
  {
    title: 'Not good for bad roads',
    description: 'Had a bad time using it in Nigeria',
    score: 2,
    car: cars.first
  }
])
