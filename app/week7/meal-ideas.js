"use client";

import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient }) {
  // Define a state variable to hold the list of meal ideas
  const [meals, setMeals] = useState([]);

  // Define a function to fetch meal ideas based on the selected ingredient
  const fetchMealIdeas = async () => {
    try {
      // Make an API request to fetch meal ideas based on the ingredient
      const response = await fetch(`API_ENDPOINT_HERE?ingredient=${ingredient}`);
      
      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        
        // Update the meals state variable with the fetched data
        setMeals(data.meals);
      } else {
        console.error('Failed to fetch meal ideas');
      }
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
    }
  };

  // Use the useEffect hook to fetch meal ideas when the component mounts
  useEffect(() => {
    fetchMealIdeas();
  }, [ingredient]); // Fetch when the ingredient prop changes

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
