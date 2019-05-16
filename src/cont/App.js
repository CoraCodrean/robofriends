import React, { Component } from 'react';
import './App.css';
import Cardlist from '../comp/Cardlist';
import Searchbox from '../comp/Searchbox';
// import { robots} from '../robots'
import Scroll from '../comp/Scroll'
localStorage.setItem("startingURL", window.location.href);


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response =>  response.json())
      .then( users => this.setState({ robots : users }));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render () {
    const { robots, searchfield } = this.state;
    const filtered = robots.filter (robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      })
     return !robots.length ? 
       <h1> loading.......</h1> :
       (
          <div className='tc'>
            <h1>RoboFriends</h1>
            <Searchbox searchChange= {this.onSearchChange}/>
            <Scroll>
              <Cardlist robots={filtered} />
            </Scroll>
          </div>
        );
      }
  
}

export default App;
