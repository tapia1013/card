import React from 'react';
import './card.styles.css';


// We no lonher have access to monster so we pass it to the params
export const Card = (props) => (
  <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
)