import React from 'react';
import './App.css';

import Playlist from "../Playlist/Playlist"
import SearchBar from "../SearchBar/Searchbar"
import SearchResults from "../SearchResults/SearchResults"
import Spotify from "../utils/Spotify"

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
      SearchResults:[],
      playlistName:"New Playlist",
      playlistTracks:[]
    }
  this.search = this.search.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.addTrack = this.addTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist - this.savePlaylist.bind(this);
  this.removeTrackFromSearch = this.removeTrackFromSearch.bind(this);
  this.doThese = this.doThese.bind(this);
  
}

search(term){
  Spotify.search(term).then(SearchResults=>{
    this.setState({
      SearchResults:SearchResults
    });
  })
}

addTrack(track){
  
}

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
