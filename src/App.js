import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import './App.css';

// Component is part of the React library and destructure it, but if we didnt we can just use in the class as React.Component instead of jut Component cause its a property of React.
// When we're doing class App extends Components what its doing/saying is "hey i want whatever functionality that react component and im going to add on to it".
// The render() method comes built in with Component, and this Component gives us some batteries options to use in our component so that we dont have constantly repeat ourself. We use something that React says hey this is a component and we just tack on some specific functionality.
// We'll learn about lifecycle methods and how these components have some important methods already on them like componentDidCatch etc...
// What lifecycle methods are methods that get called at different stages of when this component get rendered.
// What componentDidMount does is when this component mounts(essentially when React puts our component on the page/renders to DOM for first time) and it calls every block of code we write inside of it componentDidMount(){}
class App extends Component {
  constructor() {
    super();

    // default value
    this.state = {
      // Set property on our STATE obj to 'Hello Towiah'
      // string: 'Hello Towiah'

      // we want this intial arr to be empty
      monsters: [
        // {
        //   name: 'Frankenstein',
        //   id: 'asc1'
        // },
        // {
        //   name: 'Dracula',
        //   id: 'asr2'
        // },
        // {
        //   name: 'Zombie',
        //   id: 'as3'
        // }
      ]
    }
  }

  // What componentDidMount does is when this component mounts(essentially when React puts our component on the page/renders to DOM for first time) and it calls every block of code we write inside of it componentDidMount(){}
  componentDidMount() {
    // use fetch to fetch from URL, API request , and what fetch returns us is a Promise.
    fetch('https://jsonplaceholder.typicode.com/users')
      // but the promise gives us a response of the actual body of our response
      .then(response =>
        // lets return json format
        response.json()
      )
      // then return to us as new promise which we will have as the body... then what we want to do is call setState({monsters:users}) as arr of users
      .then(users => this.setState({ monsters: users }))
  }

  // setState lets us modify the object above on every HTML el.
  // button onCLick takes a func that get called when clicked
  // youre not allowed to modify state w/o setState, react is going to itercept that click and its going to report back and say i got click on the DOM what do I do? in this case we're going to say when clicked update the state but not modify it automatically. onClick happened state get updated using seState and the changes is going to re-render the components so we can go through that flow again
  render() {
    return (
      // <div className='App'>
      //   <header className='App-header'>
      //     <img src={logo} className='App-logo' alt='logo' />
      //     <p>{this.state.string}</p>
      //     <button onClick={() => this.setState({ string: 'TOWIAHHH' })}>Change text</button>
      //   </header>
      // </div>

      //the props will be any param that we pass into cardList, so if theres a prop called name and we pass in 'towiah'.
      // Children is what you put inbetween <Card><Card/> components.
      // If you put a name inbetween then the children prop will be the new name inbetween the component name tags
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
// video 21 2:09
export default App;
