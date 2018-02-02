import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyCJH8Y_ZExpA6SMLvSn2i0zV-R1EPYcnZA';

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
  console.log(data);
});

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    YTSearch({key: API_KEY, term:'surfboards'},  (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect ={selectedVideo => this.setState({selectedVideo}) }
          videos = {this.state.videos} />
      </div>
    );
  }
}
