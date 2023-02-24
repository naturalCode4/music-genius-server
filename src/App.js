import React, {useState} from 'react';
import './css/App.css';
import Header from './Components/Header.js';
import MusicSection from './Components/MusicSection/MusicSection.js';
import Filters from './Components/Filters/Filters.js';
import { filterNames } from "./utilities/utilities.js";
import LandingModal from './Components/LandingModal.js';

function App() {

  const [selectedGenre, setSelectedGenre] = useState('funk')
  const [filterLevels, setFilterLevels] = useState({
    danceability: {value: 85, disabled: false},
    energyLevel: {value: 75, disabled: false},
    mood: {value: 60, disabled: false},
    acousticness: {value: 50, disabled: true},
    vocalPresence: {value: 10, disabled: true},
    popularity: {value: 90, disabled: true},
  })

  // can memoize/custom function with certain criteria so that all the subcomponents with any of these values dont all rerender. So only component with specific one rerenders. We'll get to that later.
  const updateFilterLevel = (name, value) => {
    const updatedFilterLevels = {...filterLevels};
    updatedFilterLevels[name].value = value;
    setFilterLevels(updatedFilterLevels);
  }

  const updateFilterDisabled = (name) => {
    const updatedFilterLevels = {...filterLevels};
    updatedFilterLevels[name].disabled = !updatedFilterLevels[name].disabled;
    setFilterLevels(updatedFilterLevels);
  }

  const formattedFilterLevelsAndNames = Object.entries(filterLevels).map((filterLevel, i) => {
    return {
        value: filterLevel[1].value,
        disabled: filterLevel[1].disabled,
        key: filterLevel[0],
        name: filterNames[i],
    }
  });

  return (
    <div id="app">
      <LandingModal/>
      <Header/>
      <MusicSection
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          filterLevels={filterLevels}
          formattedFilterLevelsAndNames={formattedFilterLevelsAndNames}
        />
      <Filters
          filterLevels={filterLevels}
          updateFilterLevel={updateFilterLevel}
          updateFilterDisabled={updateFilterDisabled}
          formattedFilterLevelsAndNames={formattedFilterLevelsAndNames}
        />
    </div>
  );
}

export default App;
