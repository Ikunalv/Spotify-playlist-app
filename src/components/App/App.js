import React from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/Searchbar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../utils/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [],
      playlistName: "New Playlist",
      playlistTracks: [],
    };
    this.search = this.search.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.removeTrackFromSearch = this.removeTrackFromSearch.bind(this);
    this.doThese = this.doThese.bind(this);
  }

  search(term) {
    Spotify.search(term).then((SearchResults) => {
      this.setState({
        SearchResults: SearchResults,
      });
    });
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let trackSearch = this.state.SearchResults;
    tracks = tracks.filter((currentTrack) => currentTrack.id != track.id);
    trackSearch.unshift(track);
    this.setState({ SearchResults: tracks });
  }

  removeTrackFromSearch(track) {
    let tracks = this.state.SearchResults;
    tracks = tracks.filter((currentTrack) => currentTrack.id != track.id);
    this.setState({ SearchResults: tracks });
  }

  doThese(track) {
    this.addTrack(track);
    this.removeTrackFromSearch(track);
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "new playlist",
        playlistTracks: [],
      });
    });
  }

  render() {
    return (
      <div>
        <h1 href="http://localhost:3000">Playlistporium</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              SearchResults={this.state.SearchResults}
              onAdd={this.doThese}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
