"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Import the MealIdeas component
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // New state variable

  // Event handler to handle item selection
  const handleItemSelect = (itemName) => {
    // Clean up the item name by removing emojis and extra text
    const cleanedItemName = itemName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
      ""
    );

    setSelectedItemName(cleanedItemName);
  };

  // Event handler to handle adding a new item
  const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  return (
    <main className="flex justify-between">
      <div className="w-1/2 p-6">
        <h1 className="text-4xl font-bold text-center text-yellow-300">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass the onItemSelect prop */}
      </div>
      <div className="w-1/2 p-6">
        <MealIdeas ingredient={selectedItemName} /> {/* Pass selectedItemName as ingredient */}
      </div>
    </main>
  );
}
