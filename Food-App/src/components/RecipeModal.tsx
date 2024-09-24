import React from 'react';
import { Recipe } from '../types/Recipe';

interface RecipeModalProps {
  show: boolean;
  handleClose: () => void;
  recipe: Recipe | null;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ show, handleClose, recipe }) => {
  if (!recipe) return null;

  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex={-1} aria-hidden={!show}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{recipe.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <img src={recipe.image} alt={recipe.name} className="img-fluid mb-3" />
            <h6>Ingredients</h6>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h6>Instructions</h6>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
            <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
