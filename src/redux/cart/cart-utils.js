export const addItemToCart = (cartItems, itemToBeAdded) => {
  const existingItem = cartItems.find(item => item.id === itemToBeAdded.id);

  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToBeAdded.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToBeAdded, quantity: 1 }];
};

export const removeItem = (cartItems, itemToBeRemoved) => {
  const existingItem = cartItems.find(item => item.id === itemToBeRemoved.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToBeRemoved.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToBeRemoved.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
