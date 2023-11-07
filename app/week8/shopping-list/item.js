export default function Item({ name, quantity, category }) {
    return (
      <div className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    );
  }

  function ParentComponent() {
    const handleItemClick = (itemName) => {
      // Perform the desired action when an item is clicked
      console.log(`Clicked on item: ${itemName}`);
    };
  
    return (
      <div>
        {/* Render multiple items */}
        <Item name="Item 1" quantity={2} category="Category A" onSelect={handleItemClick} />
        <Item name="Item 2" quantity={1} category="Category B" onSelect={handleItemClick} />
        {/* Add more items here */}
      </div>
    );
  }
  