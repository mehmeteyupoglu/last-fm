import React from 'react';
import './App.css';
import { Header, TopArtists, TopTracks } from "./Components"

function App() {
  return (
    <div className="App">
      <Header />
      <TopArtists />
      <TopTracks />
    </div>
  );
}

export default App;
