"use client";

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <div className="sorting-buttons">
        Sort by:
        <button
          onClick={() => setSortBy('name')}
          style={{
            backgroundColor: sortBy === 'name' ? 'yellow' : 'white',
            marginRight: '20px',
            marginLeft: '30px',
            padding: '12px 45px',
            borderRadius: '10px'
          }}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{
            backgroundColor: sortBy === 'category' ? 'yellow' : 'white',
            padding: '12px 45px',
            borderRadius: '10px'
          }}
        >
          Category
        </button>
      </div>

      {sortedItems.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
