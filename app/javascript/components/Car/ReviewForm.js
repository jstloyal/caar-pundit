import React from 'react'

function ReviewForm(props) {
  return (
    <div className='wrapper'>
      <form onSubmit={props.handleSubmit}>
        <div>Have an experience with {props.attributes.name}? Share your review!</div>
        <div className='field'>
          <input 
            onChange={props.handleChange}
            value={props.review.title}
            type='text' 
            name='title' 
            placeholder='Review Title' 
          />
        </div>
        <div className='field'>
          <input 
            onChange={props.handleChange} 
            value={props.review.description}
            type='text' 
            name='description' 
            placeholder='Review Description'
          />
        </div>
        <div className='field'>
          <div className='ratingContainer'></div>
          <div className='tating-title-text'> Rate this Car</div>
          Rating goes here
        </div>
        <button type='submit'>Submit your review</button>
      </form>
    </div>
  )
}

export default ReviewForm;
