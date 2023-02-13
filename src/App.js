import React, {useState} from 'react';
import './css/App.css';
import Header from './Components/Header.js';
import MusicSection from './Components/MusicSection/MusicSection.js';
import Filters from './Components/Filters/Filters.js';

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

  return (
    <div id="app">
      <Header/>
      <MusicSection
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          filterLevels={filterLevels}
        />
      <Filters
          filterLevels={filterLevels}
          updateFilterLevel={updateFilterLevel}
          updateFilterDisabled={updateFilterDisabled}
        />
    </div>
  );
}

export default App;
