import axios from 'axios';
import { baseUrl } from '../config/config';
import { Recipe } from '../types/Recipe';
import { RecipeResponse } from '../types/RecipeResponse';
// Utility function to generate random values for price and quantity
const generateRandomPrice = () => (Math.random() * (50 - 10) + 10).toFixed(2); // Random price between 10 and 50
const generateRandomQuantity = () => Math.floor(Math.random() * 10) + 1; // Random quantity between 1 and 10

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
      price: generateRandomPrice(),
      quantity: generateRandomQuantity(),
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
      price: generateRandomPrice(),
      quantity: generateRandomQuantity(),
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
      price: generateRandomPrice(),
      quantity: generateRandomQuantity(),
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