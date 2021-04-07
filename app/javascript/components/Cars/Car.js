import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Car(props) {
  return (
    <div className="card">
      <div className="car-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </div>
      <div className="car-name">
        {props.attributes.name}
      </div>
      <div className="car-year">
        {props.attributes.year}
      </div>
      <div className="car-score">
        {props.attributes.average_score}
      </div>
      <div className="car-link">
        <Link to={`/cars/${props.attributes.slug}`}>View Car</Link>
      </div>
    </div>
  )
}

export default Car;
