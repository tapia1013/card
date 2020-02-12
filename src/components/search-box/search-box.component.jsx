import React from 'react';
import './search-box.styles.css';


// Functional components... they dont have access to state cause they dont have access to constructor(), they also dont have access to life cycle methods, they dont have internal state, cause they dont need to use lifecycle methods for internal state.
// Sometimes all we wanna do is render some HTML and thats what functional components really is.
// Unlike a class component a functional component is just a component that gets some props and returns some html thats we use () and not {} at the end.
export const SearchBox = ({ placeholder, handleChange }) => (
  // apply class name after copying from App.js
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
)





