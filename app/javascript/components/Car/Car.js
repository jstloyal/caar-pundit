import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Car(props) {
  const [car, setCar] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/cars/${slug}`
    
    axios.get(url)
    .then(response => console.log(response))
    .catch(response => console.log(response))
  }, [])

  return (
    <div>
      Showing the details of a particular app
    </div>
  )
}

export default Car;
