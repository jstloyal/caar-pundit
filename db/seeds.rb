# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

cars = Car.create([
  { 
    name: "Toyota",
    model: "Camry",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffavpng.com%2Fpng_search%2Ftoyota-allion&psig=AOvVaw3_4uEpr309MQw87Ow28xZR&ust=1617302327675000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOC5rPCW2-8CFQAAAAAdAAAAABAY"
  }, 
  { 
    name: "Honda",
    model: "Civic",
    image_url: "https://lh3.googleusercontent.com/proxy/Sxh3uekgSv-rVMVlQf_8ls9f3AX3zJVGbgSqlsutNzP9TWF96ILc870p1HMIlvBSGGsNT_bUv0Du00coe5lROQ96p35x6NgrR3-FkYFtPI-1o_h7eYcuuftpAzkug354EJPF1mQjqOvkus7CjSbc0Ic"
  },
  { 
    name: "Peugoet",
    model: "307",
    image_url: "https://banner2.cleanpng.com/20180515/rwq/kisspng-peugeot-207-peugeot-308-car-peugeot-ion-5afaa3f1d71ca9.3528755915263754098811.jpg" 
  }, 
  { 
    name: "Mercedes Benz",
    model: "GLK",
    image_url: "https://icon2.cleanpng.com/20171220/vte/mercedes-logo-png-5a3aaf46d69175.3260781815137953988789.jpg" 
  }, 
  { 
    name: "BMW",
    model: "X5",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3_-ao50EZ2JyGxZ92CCoOPj9BmMVZmK7UA-OXmyrmgCYLHBa-VA4qJ5lVaprns5n7WY&usqp=CAU" 
  }, 
  { 
    name: "Ford",
    model: "Focus",
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
