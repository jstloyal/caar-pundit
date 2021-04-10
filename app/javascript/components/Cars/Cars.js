import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Car from './Car';
import styled from 'styled-components';

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
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
    <Home>
      <Header>
        <h1>Caar Pundit</h1>
        <Subheader>Honest, unbiased car reviews.</Subheader>
      </Header>
      <Grid>
        {grids}
      </Grid> 
    </Home>
  )
}

export default Cars
