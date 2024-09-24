
import { useQuery } from  '@tanstack/react-query'
import { searchRecipes } from '../service/RecipeService';

export const useSearchRecipes = (query: string) => {
    return useQuery({
        queryKey:['searchRecipes', query],
        queryFn: async() => await searchRecipes(query),
        enabled: !!query,
    });
  };