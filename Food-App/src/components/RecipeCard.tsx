import React from 'react';
import { Recipe } from '../types/Recipe';
import { addToCart } from '../redux/feature/cartSilce';
import { useDispatch } from 'react-redux';

interface RecipeCardProps {
  recipe: Recipe;
  onCardClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onCardClick }) => {
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();

  const handleIncrease = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Increasing quantity of ${recipe.name}`);
    setQuantity(prev => prev + 1);
  }, [recipe.name]);

  const handleDecrease = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Decreasing quantity of ${recipe.name}`);
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  }, [recipe.name]);

  const handleAddToCart = React.useCallback((e: React.MouseEvent, recipe: Recipe) => {
    e.stopPropagation();
    console.log(`Adding ${quantity} ${recipe.name} to cart`);
    dispatch(addToCart({
      id: recipe.id,
      image: recipe.image,
      name: recipe.name,
      price: recipe.price,
      quantity
    }));
  }, [dispatch, quantity]);

  return (
    <div className="card" style={{ width: '18rem' }} onClick={() => onCardClick(recipe)}>
      <img src={recipe.image} className="card-img-top" alt={recipe.name} />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">{recipe.tags.join(', ')}</p>
        <p className="card-text"><strong>Rating:</strong> {recipe.rating}</p>
        <p className="card-text"><strong>Reviews:</strong> {recipe.reviewCount}</p>
        <p><strong>Price:</strong> ${recipe.price}</p>
        <p><strong>Quantity:</strong> {recipe.quantity}</p>
        <div className="d-flex align-items-center">
          <button className="btn btn-sm btn-danger" onClick={handleDecrease}>-</button>
          <span className="mx-2">{quantity}</span>
          <button className="btn btn-sm btn-success" onClick={handleIncrease}>+</button>
          <button 
            className="btn btn-sm btn-primary ms-4" 
            onClick={(e) => handleAddToCart(e, recipe)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
