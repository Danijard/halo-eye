import React from 'react';
import './styles/main-tile.css';
import './styles/right-zone.css';

export default function Home() {
  return (
    <div className='table'>
      {InfoElement('Name', 'BuyPrice', 'SellPrice', 'ListingsCount', 'Type')}
    </div>
  );
}

function InfoElement(Name: string, BuyPrice: string, SellPrice: string, ListingsCount: string, Type: string) {
  return (
    <div className='main-tile content-tile'>
      <span className='info-element'>{Name}</span>
      <span className='info-element'>{BuyPrice}</span>
      <span className='info-element'>{SellPrice}</span>
      <span className='info-element'>{ListingsCount}</span>
      <span className='info-element'>{Type}</span>    
    </div>
  );
}


