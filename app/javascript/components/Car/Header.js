import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;

  img {
    height: 200px;
    width: 200px;
    border: 1px solid rgba(0,0,0,0.1)
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
  const {name, image_url, year, average_score } = props.attributes;

  const total = props.reviews.length;

  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name} />
        {name} {year}
      </h1>
      <div>
        <TotalReviews>{total} User Review</TotalReviews>
        <div className='starRating'></div>
        <TotalOutOf>{average_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header;
