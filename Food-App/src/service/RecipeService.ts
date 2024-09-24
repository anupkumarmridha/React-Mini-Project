import axios from 'axios';
import { baseUrl } from '../config/config';

// Service file for fetching recipes
export const fetchRecipes = async (page = 1, limit = 30) => {
  try {
    const response = await axios.get(`${baseUrl}`, {
      params: {
        skip: (page - 1) * limit,
        limit: limit
      }
    });
    return response.data;
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
    return response.data;
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
    return response.data;
  } catch {
    throw new Error('Failed to search recipes');
  }
};