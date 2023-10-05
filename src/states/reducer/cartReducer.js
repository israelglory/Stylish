import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    items: [],
    total: 0, // Initialize the total price to zero
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += 1;
          AsyncStorage.setItem('cart', JSON.stringify(state));
          return { ...state, items: [...state.items], total: state.total + existingItem.price };
        } else {
          AsyncStorage.setItem('cart', JSON.stringify(state));
          return {
            ...state,
            items: [...state.items, { ...newItem, quantity: 1 }],
            total: state.total + newItem.price,
          };
        }
      case 'SET_CART':
        return {
          ...state,
          items: action.payload.items, // Assuming payload contains 'items'
          total: action.payload.total, // Assuming payload contains 'total'
        };
  
      case 'REMOVE_FROM_CART':
        const itemIdToRemove = action.payload;
        const itemToRemove = state.items.find((item) => item.id === itemIdToRemove);
  
        if (itemToRemove) {
          itemToRemove.quantity -= 1;
          const updatedItems = state.items.filter((item) => item.quantity > 0);
          AsyncStorage.setItem('cart', JSON.stringify(state));
          return { ...state, items: updatedItems, total: state.total - itemToRemove.price };
        }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  