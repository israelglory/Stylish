import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../states/actions/action';

export function useCart() {

  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementQuantity = (item) => {
    // Dispatch an action to increment the quantity
    // This should trigger the 'ADD_TO_CART' case in the reducer
    dispatch(addToCart(item));
    
  };

  const handleDecrementQuantity = (itemId) => {
    // Dispatch an action to decrement the quantity
    // This should trigger the 'REMOVE_FROM_CART' case in the reducer
    dispatch(removeFromCart(itemId));
  };

  return {
    handleRemoveFromCart,
    handleIncrementQuantity,
    handleDecrementQuantity,
  };
}
