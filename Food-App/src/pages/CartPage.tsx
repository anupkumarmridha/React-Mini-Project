import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store';
import { removeFromCart } from '../redux/feature/cartSilce';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart({ id }));
  }
  
  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      <div className="row">
      {cartItems.length === 0 ? (
        <div className="col-12">
        <p>Your cart is empty</p>
        </div>
      ) : (
        cartItems.map((item, index) => (
        <div key={index} className="col-12 mb-3">
          <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <p className="card-text">Price: ${item.price}</p>
            <p className="card-text">Quantity: {item.quantity}</p>
            <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
          </div>
        </div>
        ))
      )}
      </div>
    </div>
  )
}

export default CartPage