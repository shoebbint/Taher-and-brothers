import React, { useState } from 'react';

const useCart = (product) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product?._id);
        if (existingItem) {
          const updatedItems = cartItems.map((item) =>
            item.id === product?._id ? { ...item, quantity: item.quantity + 1 } : item
          );
          setCartItems(updatedItems);
        
        } else {
          setCartItems([...cartItems, { ...product, quantity: 1 }]);
  
        }
      };
    return (
        [cartItems, setCartItems,addToCart]
    );
};

export default useCart;