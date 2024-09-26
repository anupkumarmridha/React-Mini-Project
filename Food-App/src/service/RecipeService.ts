import axios from 'axios';
import { baseUrl } from '../config/config';
import { Recipe } from '../types/Recipe';
import { RecipeResponse } from '../types/RecipeResponse';
// Utility function to generate random values for price and quantity
const generatePrice = (rating:number, reviewCount:number) => (reviewCount * rating)/10; 
const generateQuantity = (rating:number) => rating.toFixed(2);

// Service file for fetching recipes
export const fetchRecipes = async (page = 1, limit = 30) => {
  try {
    const response = await axios.get(`${baseUrl}`, {
      params: {
        skip: (page - 1) * limit,
        limit: limit
      }
    });

    // console.log(response.data);

    const modifiedRecipes = response.data.recipes.map((recipe: Recipe) => ({
      ...recipe,
      price: generatePrice(recipe.rating, recipe.reviewCount),
      quantity: generateQuantity(recipe.rating),
    }));
    
    const recipeResponse: RecipeResponse = {
      recipes: modifiedRecipes,
      total: response.data.total,
    };
    // console.log(recipeResponse);
    return recipeResponse;
  } catch {
    throw new Error('Failed to fetch recipes');
  }
};

// Function to fetch recipes with sorting
export const fetchSortedRecipes = async (sortBy: string, order: 'asc' | 'desc', page = 1, limit = 30) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        sortBy,
        order,
        skip: (page - 1) * limit,
        limit
      }
    });

    const modifiedRecipes = response.data.recipes.map((recipe: Recipe) => ({
      ...recipe,
      price: generatePrice(recipe.rating, recipe.reviewCount),
      quantity: generateQuantity(recipe.rating),
    }));
    
    const recipeResponse: RecipeResponse = {
      recipes: modifiedRecipes,
      total: response.data.total,
    };
    // console.log(recipeResponse);
    return recipeResponse;
  } catch {
    throw new Error('Failed to fetch sorted recipes');
  }
};

// Function to search recipes
export const searchRecipes = async (query: string) => {
  if (!query) return { recipes: [] };
  try {
    const response = await axios.get(`${baseUrl}/search`, {
      params: { q: query }
    });
    const modifiedRecipes = response.data.recipes.map((recipe: Recipe) => ({
      ...recipe,
      price: generatePrice(recipe.rating, recipe.reviewCount),
      quantity: generateQuantity(recipe.rating),
    }));
    
    const recipeResponse: RecipeResponse = {
      recipes: modifiedRecipes,
      total: response.data.total,
    };
    // console.log(recipeResponse);
    return recipeResponse;
  } catch {
    throw new Error('Failed to search recipes');
  }
};