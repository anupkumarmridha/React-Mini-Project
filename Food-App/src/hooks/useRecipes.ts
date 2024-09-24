import { useQuery } from '@tanstack/react-query';
import { fetchRecipes } from '../service/RecipeService';
import { Recipe } from '../types/Recipe';

interface RecipeResponse {
  recipes: Recipe[];
  total: number;
}

export const useRecipes = (page = 1, limit = 8) => {
  return useQuery<RecipeResponse>({
    queryKey: ['recipes', page],
    queryFn: async() => await fetchRecipes(page, limit),
  });
};
