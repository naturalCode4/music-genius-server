import React, {useState} from 'react';
import './css/App.css';
import Header from './Components/Header.js';
import MusicSection from './Components/MusicSection/MusicSection.js';
import Filters from './Components/Filters/Filters.js';
// import { formatFiltersAndSetFiltersAndNamePackage } from './utilities/utilities';

function App() {

  const [selectedGenre, setSelectedGenre] = useState('rock')
  const [filterLevels, setFilterLevels] = useState({
    danceability: 75,
    energyLevel: 75,
    mood: 75,
    acousticness: 75,
    vocalPresence: 75,
    popularity: 75,
  })

  // can memoize/custom function with certain criteria so that all the subcomponents with any of these values dont all rerender. So only component with specific one rerenders. We'll get to that later.
  const updateFilterLevel = (filter, value) => {
    const updatedFilterLevels = {...filterLevels};
    updatedFilterLevels[filter] = value;
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
        />
    </div>
  );
}

export default App;
