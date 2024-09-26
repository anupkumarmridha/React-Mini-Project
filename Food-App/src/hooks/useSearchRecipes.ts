
import { useQuery } from  '@tanstack/react-query'
import { searchRecipes } from '../service/RecipeService';
import { RecipeResponse } from '../types/RecipeResponse';
export const useSearchRecipes = (query: string) => {
    return useQuery<RecipeResponse>({
        queryKey:['searchRecipes', query],
        queryFn: async() => {
            const data = await searchRecipes(query)
            return data;
        },
        enabled: !!query,
    });
  };