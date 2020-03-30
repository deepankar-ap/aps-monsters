import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1fzu3k')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1> AppPerfect Monsters </h1>
        <SearchBox placeholder='Search Monsters' handleChange={this.onSearchChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;