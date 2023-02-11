import React, {useState} from 'react';
import './css/App.css';
import Header from './Components/Header';
import MusicSection from './Components/MusicSection/MusicSection';
import Filters from './Components/Filters/Filters';

function App() {

  const [selectedGenre, setSelectedGenre] = useState('')
  const [danceability, setDanceability] = useState(75)
  const [energyLevel, setEnergyLevel] = useState(75)
  const [affect, setAffect] = useState(75)
  const [acousticness, setAcousticness] = useState(75)
  const [vocalPresence, setVocalPresence] = useState(75)
  const [popularity, setPopularity] = useState(75)

  // can it move to utilities -- since it has variable names the utility file won't know?
  const filtersAndSetFiltersPackage = [[danceability, setDanceability, 'Danceability'], [energyLevel, setEnergyLevel, 'Energy Level'], [affect, setAffect, 'Mood'], [acousticness, setAcousticness, 'Acousticness'], [vocalPresence, setVocalPresence, 'Vocal Presence'], [popularity, setPopularity, 'Popularity'], ]

  return (
    <div id="app">
      <Header/>
      <MusicSection
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      <Filters
          filtersAndSetFiltersPackage={filtersAndSetFiltersPackage}
        />
    </div>
  );
}

export default App;
