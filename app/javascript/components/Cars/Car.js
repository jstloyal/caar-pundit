import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`

const CarLogo = styled.div`
  width: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  img {
    height: 50px;
    width: 50px;
    border: 1px solid #efefef;
  }
`

const CarName = styled.div`
  padding: 20px;
`

const LinkWrapper = styled.div`
  margin 20px 0;
  height: 50px;

  a {
    color: #fff;
    background-color: #000;
    border-radius: 4px;
    padding: 10px 30px;
    border: 1px solid #000;
    font-weight: 600;
    cursor: pointer;
    margin: 7px;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
  }
`

function Car(props) {
  return (
    <Card>
      <CarLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </CarLogo>
      <CarName>
        {props.attributes.name}
      </CarName>
      <div className="car-year">
        {props.attributes.year}
      </div>
      <div className="car-score">
        {props.attributes.average_score}
      </div>
      <LinkWrapper>
        <Link to={`/cars/${props.attributes.slug}`}>View Car</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Car;
