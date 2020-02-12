import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // define "this" in the constructor or else we get an error useing this.setState with handleChange() cause of scope, we put here cause constructor() get run first.
    // We bind it like this.handleChange.bind(this), so what is .bin() its a method on any func that returns a new func where the context of "this" is set to whatever we passed to it and the context of "this" that we're setting in handleChange() is the "this" keyword that is defined inside our constructor/here..but if we use arrow funcs we dont need to do this anymore
    // this.handleChange = this.handleChange.bind(this)

  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>
        response.json()
      )
      .then(users => this.setState({ monsters: users }))
  }

  // For the search incase we need to use it more than once
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  // handleChange but with es6 arrow function which is better cause it lets them set the context of "this" in whatever it was that decalred it in the first place.
  // Arrow funcs auto allow you to set "this" when the ()=>{} is defined.
  // So when our component is getting run by JS for the first time and it has to instantiate the new App class it checks inside and it sees that theres "this" handle change methd that points to a arrow func in
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>

      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>

    );
  }
}
export default App;









































































































































































































































//                       FIRST HALF  video 28
/*
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// Component is part of the React library and destructure it, but if we didnt we can just use in the class as React.Component instead of jut Component cause its a property of React.
// When we're doing class App extends Components what its doing/saying is "hey i want whatever functionality that react component and im going to add on to it".
// The render() method comes built in with Component, and this Component gives us some batteries options to use in our component so that we dont have constantly repeat ourself. We use something that React says hey this is a component and we just tack on some specific functionality.
// We'll learn about lifecycle methods and how these components have some important methods already on them like componentDidCatch etc...
// What lifecycle methods are methods that get called at different stages of when this component get rendered.
// What componentDidMount does is when this component mounts(essentially when React puts our component on the page/renders to DOM for first time) and it calls every block of code we write inside of it componentDidMount(){}
// Each component in the end of the day is a function that renders, so if state changes its going to notify this component/parent and say hey run the render function again each time it gets updated.
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
      ],
      // stored value to search/filter monsters
      searchField: ''
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
    // filter the monsters that dont have the text we put and we do it in the render(), but we dont want to modify the state of monster array cause we want to keep the raw data just in case somewhere in the component we need to use the base unmodified arr, what we do is make a new arr with .filter() method, so we first destructure {}, which allows us to pull properties off of an object and set them to constants that we pur inside the {} and = the actual object we want to destructure from which is this.state, so we basically pull properties off of this.state and put them in {}.
    const { monsters, searchField } = this.state;
    // these below are the same as the destructure above.
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField

    // With filter we get back a new arr based off of the func we pass into it.
    const filteredMonsters = monsters.filter(monster =>
      // take the name and lowecase cause we dont want search to be case sensitive and add .includes() and what it does is it just checks whether we pass a string or not is actually in the monster
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

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
      // If you put a name inbetween then the children prop will be the new name inbetween the component name tags.
      // For the search section when you type the first letter in its empty cause of async so React gave us something and its a callback and goes as a second param after the searchFild: e.target.value and the CB runs after setState is finished.
      <div className='App'>
        <SearchBox
          placeholder='search monsters'
          handleChange={e =>
            this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>

    );
  }
}
export default App;
*/
