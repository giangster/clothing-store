export const addItemToCart = (cartItems, itemToBeAdded) => {
  const itemExistence = cartItems.find(item => item.id === itemToBeAdded.id);

  if (itemExistence) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToBeAdded.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToBeAdded, quantity: 1 }];
};
