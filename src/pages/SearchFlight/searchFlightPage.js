import React from 'react';
import Header from '../../components/Header/Header';
import SearchFlight from '../../components/SearchFlight/SearchFlight';
import './searchFlight.css';

function SearchFlightPage() {
  document.body.style.backgroundColor = '#063048';
  return (
      <div>
        <Header textColor="white" />
        <SearchFlight />
      </div>
    
  );
}

export default SearchFlightPage;
