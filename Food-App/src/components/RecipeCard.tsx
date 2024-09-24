import React from 'react';

interface Recipe {
  name: string;
  image: string;
  caloriesPerServing: number;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <div className="recipe-info">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} min</p>
        <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} min</p>
      </div>
    </div>
  );
};

export default RecipeCard;
