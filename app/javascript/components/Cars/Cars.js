import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Car from './Car';

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Get all the car from the api
    // update cars in our state
    axios.get('/api/v1/cars.json')
    .then(response => {
      setCars(response.data.data);
    })
    .catch(response => console.log(response))
  }, [cars.length])

  const grids = cars.map(item => {
    return (
      <Car 
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    <div className="home">
      <div className="header">
        <h1>Caar Pundit</h1>
        <div className="subheader">Honest, unbiased car reviews.</div>
      </div>
      <div className="grid">
        {grids}
      </div>
    </div>
  )
}

export default Cars
