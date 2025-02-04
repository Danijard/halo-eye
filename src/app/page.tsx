import React from 'react';
import Image from 'next/image';
import './styles/tile.css';
import './styles/right-zone.css';

interface ItemInfoTableElementProps {
  itemKey: number;
  itemPicUrl: string;
  itemName: string;
  itemType: string;
  itemBuyPrice: number;
  itemBuyPriceDiff: number;
  itemSellPrice: number;
  itemSellPriceDiff: number;
  itemListingCount: number;
}

const ItemInfoTableElement: React.FC<ItemInfoTableElementProps> = ({
  itemPicUrl,
  itemName,
  itemType,
  itemBuyPrice,
  itemBuyPriceDiff,
  itemSellPrice,
  itemSellPriceDiff,
  itemListingCount
}) => {
  const formatPrice = (price: number) => price.toFixed(2);
  const formatDiff = (diff: number) => `${diff > 0 ? '+' : ''}${diff.toFixed(2)}%`;

  return (
    <div className='tile info-element'>
      <Image src={itemPicUrl} alt={itemName} className='item-image' width={100} height={100} />
      <div className='item-info-split'></div>
      <div className="item-header">
        <h3 className="item-name">{itemName}</h3>
        <span className="item-type">{itemType}</span>
      </div>
      <div className='item-info-split'></div>
      <div className="buy-section">
        <div className="buy-price">
          <label>Buy Price:</label>
          <div className="price-value">
            {formatPrice(itemBuyPrice)}
            <span className={`price-diff ${itemBuyPriceDiff >= 0 ? 'positive' : 'negative'}`}>
              {formatDiff(itemBuyPriceDiff)}
            </span>
          </div>
        </div>
      </div>
      <div className='item-info-split'></div>
      <div className="sell-section">
        <div className="sell-price">
          <label>Sell Price:</label>
          <div className="price-value">
            {formatPrice(itemSellPrice)}
            <span className={`price-diff ${itemSellPriceDiff >= 0 ? 'positive' : 'negative'}`}>
              {formatDiff(itemSellPriceDiff)}
            </span>
          </div>
        </div>
      </div>
      <div className='item-info-split'></div>
      <div className='listing-section'>
        <label>Listing Count:</label>
        <span className="listing-count">{itemListingCount}</span>
      </div>
    </div>
  );
};

const items = [
  {
    itemKey: 1,
    itemPicUrl: '/placeholder.png',
    itemName: 'Item 1',
    itemType: 'Type 1',
    itemBuyPrice: 100,
    itemBuyPriceDiff: 10,
    itemSellPrice: 110,
    itemSellPriceDiff: 10,
    itemListingCount: 10,
  },
  {
    itemKey: 2,
    itemPicUrl: '/placeholder.png',
    itemName: 'Item 2',
    itemType: 'Type 2',
    itemBuyPrice: 200,
    itemBuyPriceDiff: -5,
    itemSellPrice: 220,
    itemSellPriceDiff: 3,
    itemListingCount: 20,
  },
  {
    itemKey: 3,
    itemPicUrl: '/placeholder.png',
    itemName: 'StatTrak™ Desert Eagle Trigger Discipline',
    itemType: 'Weapon Indeed',
    itemBuyPrice: 300,
    itemBuyPriceDiff: 15,
    itemSellPrice: 330,
    itemSellPriceDiff: -2,
    itemListingCount: 30123123,
  },
];

export default function Dashboard() {
  return (
    <div className='table'>
      {items.map(item => (
        <ItemInfoTableElement
          key={item.itemKey}
          {...item}
        />
      ))}
    </div>
  );
}