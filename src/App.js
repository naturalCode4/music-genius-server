import React, {useState} from 'react';
import './css/App.css';
import Header from './Components/Header';
import MusicSection from './Components/MusicSection/MusicSection';
import Filters from './Components/Filters/Filters';

function App() {

  const [genre, setGenre] = useState('')
  const [danceability, setDanceability] = useState(50)
  const [energyLevel, setEnergyLevel] = useState(50)
  const [affect, setAffect] = useState(50)
  const [acousticness, setAcousticness] = useState(50)
  const [vocalPresence, setVocalPresence] = useState(50)
  const [popularity, setPopularity] = useState(50)

  return (
    <div id="app">
      <Header/>
      <MusicSection
          genre={genre}
          setGenre={setGenre}
        />
      <Filters
          danceability={danceability}
          setDanceability={setDanceability}
          energyLeve={energyLevel}
          setEnergyLevel={setEnergyLevel}
          affect={affect}
          setAffect={setAffect}
          acousticness={acousticness}
          setAcousticness={setAcousticness}
          vocalPresence={vocalPresence}
          setVocalPresence={setVocalPresence}
          popularity={popularity}
          setPopularity={setPopularity}
        />
    </div>
  );
}

export default App;
