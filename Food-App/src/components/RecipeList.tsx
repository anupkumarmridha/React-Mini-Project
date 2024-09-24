import { useState } from 'react';
import { useRecipes } from '../hooks/useRecipes';
import RecipeCard from './RecipeCard';
import Pagination from './Pagination';

interface Recipe {
  id: number;
  name: string;
  image: string;
  caloriesPerServing: number;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
}

const RecipeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useRecipes(currentPage);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading recipes.</p>;

  return (
    <div>
      <h1>Recipes</h1>
      <div className="recipe-list">
        {data.recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={data.total} 
        itemsPerPage={30}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RecipeList;
