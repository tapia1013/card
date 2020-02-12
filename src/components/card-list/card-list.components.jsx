import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';


// components takes in props and its the param that we get from our functional component
export const CardList = props => (
  // console.log(props);

  // if we replace Hello and render {props.children} it uses the code or html or whatever you passed in the App in this case i put Lia in h1.
  // After we remove {props.children} and replace it with the code that was in the App.js.
  // we use .map cause it returns us the return of w/e func we pass to it iterated over every el in the arr.
  // if we dont add a key we'll get an error messge that we need 1.
  // Reason we want a unique key is cause React needs to know what el it needs to update.
  // its not off state its off of the props so we change state to props
  <div className='card-list'>
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);






































