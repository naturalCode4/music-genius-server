import React, {useState} from 'react';
import './css/App.css';
import Header from './Components/Header';
import MusicSection from './Components/MusicSection/MusicSection';
import Filters from './Components/Filters/Filters';

function App() {

  const [selectedGenre, setSelectedGenre] = useState('')
  const [danceability, setDanceability] = useState(50)
  const [energyLevel, setEnergyLevel] = useState(50)
  const [affect, setAffect] = useState(50)
  const [acousticness, setAcousticness] = useState(50)
  const [vocalPresence, setVocalPresence] = useState(50)
  const [popularity, setPopularity] = useState(50)

  const filtersAndSetFiltersPackage = [[danceability, setDanceability], [energyLevel, setEnergyLevel], [affect, setAffect], [acousticness, setAcousticness], [vocalPresence, setVocalPresence], [popularity, setPopularity], ]

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
