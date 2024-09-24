// Service file for fetching recipes
export const fetchRecipes = async (page = 1, limit = 30) => {
    const response = await fetch(`https://dummyjson.com/recipes?skip=${(page - 1) * limit}&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch recipes');
    return response.json();
  };
  