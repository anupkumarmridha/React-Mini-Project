import React from 'react';
import { Recipe } from '../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onCardClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onCardClick }) => {
  return (
    <div className="card" style={{ width: '18rem' }} onClick={() => onCardClick(recipe)}>
      <img src={recipe.image} className="card-img-top" alt={recipe.name} />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">{recipe.tags.join(', ')}</p>
        <p className="card-text"><strong>Rating:</strong> {recipe.rating}</p>
        <p className="card-text"><strong>Reviews:</strong> {recipe.reviewCount}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
