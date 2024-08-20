import React from 'react';
import FlightList from '../../components/FlightList/FlightList';
import './flightListPage.css';

function FlightListPage() {
  document.body.style.backgroundColor = 'white';
  return (
    <div className='flight-list-container'>
      <FlightList />
    </div>
  );
}

export default FlightListPage;
