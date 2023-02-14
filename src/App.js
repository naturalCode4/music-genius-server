import React, {useState} from 'react';
import './css/App.css';
import Header from './Components/Header.js';
import MusicSection from './Components/MusicSection/MusicSection.js';
import Filters from './Components/Filters/Filters.js';
import { filterNames } from "./utilities/utilities.js";

function App() {

  const [selectedGenre, setSelectedGenre] = useState('rock')
  const [filterLevels, setFilterLevels] = useState({
    danceability: {value: 75, disabled: false},
    energyLevel: {value: 75, disabled: false},
    mood: {value: 75, disabled: false},
    acousticness: {value: 75, disabled: false},
    vocalPresence: {value: 75, disabled: false},
    popularity: {value: 75, disabled: false},
  })

  console.log('rendering app. filterLevels:', filterLevels)

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
    console.log('building formattedFilterLevelsAndNames')
    return {
        value: filterLevel[1].value,
        disabled: filterLevel[1].disabled,
        key: filterLevel[0],
        name: filterNames[i],
    }
});

  return (
    <div id="app">
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
