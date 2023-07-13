import React from 'react';
import BusinessList from './components/BusinessList';
import { SearchBar } from './components/SearchBar';

const App = () => {
  return (
    <div className="app">
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
