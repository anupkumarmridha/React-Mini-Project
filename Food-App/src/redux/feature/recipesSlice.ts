import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../../types/Recipe';

interface RecipesState {
  searchTerm: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  selectedRecipe: Recipe | null;
  showModal: boolean;
  currentPage: number; // Add currentPage to the state
}

const initialState: RecipesState = {
  searchTerm: '',
  sortBy: 'name',
  sortOrder: 'asc',
  selectedRecipe: null,
  showModal: false,
  currentPage: 1 // Initialize currentPage
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setSortOrder(state, action: PayloadAction<'asc' | 'desc'>) {
      state.sortOrder = action.payload;
    },
    setSelectedRecipe(state, action: PayloadAction<Recipe | null>) {
      state.selectedRecipe = action.payload;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload; // Action to set currentPage
    }
  }
});

export const {
  setSearchTerm,
  setSortBy,
  setSortOrder,
  setSelectedRecipe,
  toggleModal,
  setCurrentPage
} = recipesSlice.actions;

export default recipesSlice.reducer;
