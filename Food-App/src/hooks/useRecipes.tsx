import { useQuery } from '@tanstack/react-query';
import { fetchRecipes } from '../service/RecipeService';

export const useRecipes = (page = 1, limit = 30) => {
  return useQuery({
    queryKey: ['recipes', page],
    queryFn: () => fetchRecipes(page, limit),
  });
};
