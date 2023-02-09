import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import MusicSection from './Components/MusicSection/MusicSection';
import Filters from './Components/Filters/Filters';

function App() {

  const [genre, setGenre] = useState()
  const [danceability, setDanceability] = useState()
  const [energyLevel, setEnergyLevel] = useState()
  const [affect, setAffect] = useState()
  const [acousticness, setAcousticness] = useState()
  const [vocalPresence, setVocalPresence] = useState()
  const [popularity, setPopularity] = useState()

  return (
    <div id="app">
      <Header/>
      <MusicSection/>
      <Filters/>
    </div>
  );
}

export default App;
