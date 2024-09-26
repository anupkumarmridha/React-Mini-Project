import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { setSelectedRecipe, toggleModal, setCurrentPage } from '../redux/feature/recipesSlice';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';
import Pagination from './UI/Pagination';
import { useRecipes } from '../hooks/useRecipes';
import { useFetchSortedRecipes } from '../hooks/useFetchSortedRecipes';
import { useSearchRecipes } from '../hooks/useSearchRecipes';
import { Recipe } from '../types/Recipe';

const RecipeList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchTerm, sortBy, sortOrder, currentPage, showModal, selectedRecipe } = useSelector((state: RootState) => state.recipes);

  // Default data fetching for the homepage
  const { data: defaultRecipesData, isFetching: isFetchingDefault, error: defaultError } = useRecipes(currentPage, 8);

  // Use the fetch sorted recipes hook when sorting
  const { data: sortedRecipesData, isFetching: isFetchingSorted } = useFetchSortedRecipes(currentPage, 8, sortBy, sortOrder);

  // Use the search recipes hook when searching
  const { data: searchResultsData, isFetching: isFetchingSearch } = useSearchRecipes(searchTerm);

  // Determine which data to display
  let recipesData;
  let isFetching;
  let error;

  if (searchTerm) {
    recipesData = searchResultsData;
    isFetching = isFetchingSearch;
    error = null;
    // console.log("searchResultsData", searchResultsData);
  } else if (sortBy) {
    recipesData = sortedRecipesData;
    isFetching = isFetchingSorted;
    error = null;
    // console.log("sortedRecipesData", sortedRecipesData);
  } else {
    recipesData = defaultRecipesData;
    isFetching = isFetchingDefault;
    error = defaultError;
    // console.log("defaultRecipesData", defaultRecipesData);
  }

  const handleCardClick = (recipe: Recipe) => {
    dispatch(setSelectedRecipe(recipe));
    dispatch(toggleModal());
  };

  const handleCloseModal = () => {
    dispatch(toggleModal());
  };

  // if (defaultRecipesData) {
  //   console.log(defaultRecipesData);
  // }
  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error loading recipes.</p>;
  if (!recipesData) return <p>No recipes found.</p>;

  return (
    <div className='container'>
      <h1>Recipes</h1>
      <div className="recipe-list d-flex flex-wrap">
        {recipesData.recipes.map((recipe: Recipe) => (
          <div key={recipe.id} className="p-2">
            <RecipeCard recipe={recipe} onCardClick={handleCardClick} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={recipesData.total || 0}
        itemsPerPage={8}
        onPageChange={(page) => dispatch(setCurrentPage(page))}
      />
      {showModal && selectedRecipe && (
        <RecipeModal show={showModal} handleClose={handleCloseModal} recipe={selectedRecipe} />
      )}
    </div>
  );
};

export default RecipeList;
