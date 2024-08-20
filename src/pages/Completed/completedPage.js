import React from 'react';
import Header from '../../components/Header/Header';
import Completed from '../../components/Completed/Completed';
import './completedPage.css';

function CompletedPage() {
  return (
    <div className='search-flight-page'>
        <Header textColor="black" />
        <Completed />
    </div>
  );
}

export default CompletedPage;
