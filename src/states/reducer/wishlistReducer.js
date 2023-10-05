import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    items: [],
    //existed: false,
  };
  
  const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_WISHLIST':
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);
        if (existingItem) {
          const updatedItems = state.items.filter((item) => item.id != newItem.id);
          return { 
            ...state, 
            items: updatedItems,

          };
        } else {
          return {
            ...state,
            items: [...state.items, newItem],
          };
        }

  
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  