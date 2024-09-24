import { useQuery } from "@tanstack/react-query";
import { fetchSortedRecipes } from "../service/RecipeService";


export const useFetchSortedRecipes = (page: number, limit: number, sortBy: string, order: 'asc' | 'desc') => {
    return useQuery({
        queryKey:['recipes', page, limit, sortBy, order],
        queryFn: async() => await fetchSortedRecipes(sortBy, order, page, limit),
    });
  };
