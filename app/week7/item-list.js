"use client";

import { useState } from "react";   
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');
  
    const sortedItems = [...items].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  
    const handleSortByName = () => {
      setSortBy('name');
    };
  
    const handleSortByCategory = () => {
      setSortBy('category');
    };
  
    return (
      <div>
        <div className="sorting-buttons">
          Sort by:
          <button
            onClick={handleSortByName}
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
            onClick={handleSortByCategory}
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
            onSelect={() => onItemSelect(item)} // Pass the item to onItemSelect
          />
        ))}
      </div>
    );
  }
