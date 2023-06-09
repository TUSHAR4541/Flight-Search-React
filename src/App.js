import React, { Component } from 'react';

import './App.css';
import Header from './components/headerView/Header';
import Search from './components/searchView/Search';
import FlightResult from './components/resultView/FlightsResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  onSearch(params) {
    this.setState({
      data: params,
    });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <section className="app__content">
          <Search onSearch={this.onSearch.bind(this)} />
          <FlightResult data={this.state.data} />
        </section>
      </div>
    );
  }
}

export default App;
