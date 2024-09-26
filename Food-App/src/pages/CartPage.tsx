import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, updateCartQuantity } from '../redux/feature/cartSilce';
import CartItem from '../components/UI/CartItem';

const CartPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemoveFromCart = useCallback((id: number) => {
    console.log(`Removing ${id} from cart`);
    dispatch(removeFromCart({ id }));
  }, [dispatch]);


  const handleQuantityChange = useCallback((id: number, newQuantity: number) => {
    console.log(`Updating quantity ${newQuantity} with id: ${id}`);

    if (newQuantity > 0) {
      dispatch(updateCartQuantity({ id, quantity: newQuantity }));
    }
  }, [dispatch]);

  const cartContent = useMemo(() => {
    if (cartItems.length === 0) {
      return <p>Your cart is empty</p>;
    }

    return cartItems.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemoveFromCart}
      />
    ));
  }, [cartItems, handleQuantityChange, handleRemoveFromCart]);

  const calculateTotal = useCallback(() => {
    console.log(`Calculating total`);
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },[cartItems]);

  const handleCheckout = useCallback(() => {
    // Implement checkout logic here
    alert('Proceeding to checkout');
    cartItems.forEach((item: { id: number }) => {
      dispatch(removeFromCart({ id: item.id }));
    });
  }, [cartItems, dispatch]);

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      <div className="row">
        {cartContent}
      </div>
      {cartItems.length > 0 &&
        <div className='col-12 mt-3'>
          <h4>Total: ${calculateTotal()}</h4>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      }
    </div>
  );
};

export default CartPage;
