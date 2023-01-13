//import logo from './logo.svg';
//import './App.css';
import React from "react";
import './App.css'

import { Component } from "react";
//import FunctionalComp from "./components/FunctionalComp"; can rename
//import FC from "./components/FunctionalComp";
//import {ClassComp,ClassComp1} from "./components/ClassComp";
//import Click from "./components/Click";
//import Counter from "./components/Counter";
//import ParentComp from "./components/ParentComp";
import Playlist from "../components/Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";



import SearchResults from "../components/SearchResults/SearchResults";
import Spotify from "../util/Spotify";

class App extends React.Component{

constructor(props) {

  super(props)

  this.state = {
    SearchResults:[],  //search results going to be an array
    playlistname:"new playlist",
    playlistTracks:[]
     
  };
  this.search=this.search.bind(this);
  this.addTrack=this.addTrack.bind(this);
  this.removeTrack=this.removeTrack.bind(this);
  this.updatePlaylistName=this.updatePlaylistName.bind(this);
  this.removeTrackSearch=this.removeTrackSearch.bind(this);
  this.savePlaylist=this.savePlaylist.bind(this);
  this.doThese=this.doThese.bind(this);
};

search(term){
  Spotify.search(term).then(SearchResults =>{
    this.setState({SearchResults:SearchResults});
  });
}
addTrack(track){

  let tracks=this.state.playlistTracks;
  if(tracks.find(savedTrack=>savedTrack.id===tracks.id)){
    return
  }
  tracks.push(track);
  this.setState({playlistTracks:tracks});
  }
  removeTrack(track){
    let tracks=this.state.playlistTracks;
    let trackSearch=this.state.SearchResults;
    tracks=tracks.filter(currentTrack=>currentTrack.id!==track.id);
    trackSearch.unshift(track);
    this.setState({playlistTracks:tracks});
  }
  removeTrackSearch(track){
    let tracks=this.state.SearchResults;
    tracks=tracks.filter(currentTrack=>currentTrack.id!==track.id);
    this.setState({SearchResults});
  }
  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track);
  }
  updatePlaylistName(name){
    this.setState({updatePlaylistName:name});
  }
  savePlaylist(){
    const trackUris=this.state.playlistTracks.map(track=>track.uri);
    Spotify.savePlaylist(this.state.playlistname,trackUris).then(()=>{
      this.setState({
        updatePlaylistName:"new playlist",
        playlistTracks:[]
      });
    });
  }
}


function MyApp() {
 return(
  <div>
    <h1>
      <a href="http:/localhost:3000">Musicophile</a>
    </h1>
    <div className="App">
      <SearchBar onSearch={this.search} />
      <div className="App-playlist">
        <SearchResults SearchResults={this.state.SearchResults} onAdd={this.doThese}/>
        <Playlist playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName}onRemove={this.removeTrack}onSave={this.savePlaylist}/>
      </div>
    </div>
  </div>
  
  
  //all html tag have to enclosed with class div
 // <div><h1>hello welcome to react js first program</h1>
  //<h1>FAST 10 IS COMING</h1>
 /*<FC></FC>
  <ClassComp />
  <ClassComp1 />
  <Click />
  <Counter />
  <ParentComp/>
  </div>*/
 
  );
}

export default MyApp;
// in react every single time we have to include our js fill with app.js with the help of 
// export default in our js file and import in app.js and our js files tags in the end
//instead of <FC></FC> we can give <FC />
//all js files are excecuted from app.js