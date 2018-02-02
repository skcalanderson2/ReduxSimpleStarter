import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import SearchBar from './search_bar'

const API_KEY = 'AIzaSyCJH8Y_ZExpA6SMLvSn2i0zV-R1EPYcnZA';

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
  console.log(data);
});

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };
    this.state = { term:'surfboards'};
    YTSearch({key: API_KEY, term: this.state.term},  (videos) => {
      this.setState({ videos });
      // ES6 expands to this.setStat({ videos : videos}) only works
      // when key and value have same name 
    });

  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
