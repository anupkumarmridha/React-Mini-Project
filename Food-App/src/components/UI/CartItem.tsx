import React from 'react';
import { CartItem as CartItemType } from '../../types/CartItem';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = React.memo(({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="col-12 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
          <p className="card-text">Price: ${item.price}</p>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              className="btn btn-sm btn-success"
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            >
              +
            </button>
          <button
            className="btn btn-danger ms-4"
            onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CartItem;
