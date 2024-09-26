import { useQuery } from '@tanstack/react-query';
import { fetchRecipes } from '../service/RecipeService';
import { RecipeResponse } from '../types/RecipeResponse';

export const useRecipes = (page = 1, limit = 8) => {
  return useQuery<RecipeResponse>({
    queryKey: ['recipes', page],
    queryFn: async() => {
      const data = await fetchRecipes(page, limit);
      console.log('Fetched recipes:', data);
      return data;
    },
  });
};
