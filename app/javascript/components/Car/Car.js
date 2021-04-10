import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import styled from 'styled-components';
import ReviewForm from './ReviewForm';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
  background: #fff;
  height: 100vh;
  overfloat: scroll;

  &:last-child {
    background: #000;
  }
`

const Main = styled.div`
  padding-left: 50px;
`

function Car(props) {
  const [car, setCar] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/cars/${slug}`
    
    axios.get(url)
    .then(response => {
      setCar(response.data)
      setLoaded(true)
    })
    .catch(response => console.log(response))
  }, []);

  const handleChange = e => {
    e.preventDefault();

    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

    console.log('review:', review)
  }

  const handleSubmit = e => {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    const car_id = car.data.id;
    axios.post('/api/v1/reviews', {review, car_id})
    .then(response => {
      debugger
    })
    .catch(response => {})
  }

  return (
    <Wrapper>
      {
        loaded &&
        <Fragment>
          <Column>
            <Main>
              <Header 
                attributes={car.data.attributes}
                reviews={car.included}
              />
              <div className='reviews'></div>
            </Main>
          </Column>
          <Column>
            <ReviewForm 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={car.data.attributes}
              review={review}
            />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Car;
