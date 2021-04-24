import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;

  img {
    height: 200px;
    width: 200px;
    border: none;
  }

  h1 {
    font-size: 30px;
  }
`

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

function Header(props) {
  const {name, image_url, year, average_score, reviews } = props.attributes;

  const total = props.reviews.length;

  return (
    <Wrapper>
      <img src={image_url} alt={name} />
      <h1>{name} {year}</h1>
      <div>
        <TotalReviews>{reviews ? reviews.length : 0} User Review</TotalReviews>
        <div className='starRating'></div>
        <TotalOutOf>{average_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header;
