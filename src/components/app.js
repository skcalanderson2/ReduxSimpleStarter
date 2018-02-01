import React, { Component } from 'react';

import SearchBar from './search_bar'

const API_KEY = 'AIzaSyCJH8Y_ZExpA6SMLvSn2i0zV-R1EPYcnZA';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
