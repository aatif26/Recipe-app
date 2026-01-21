import { CategoryResponse, DetailResponse, MealResponse } from '../models/MealModels';

import api from './axiosInstance';

export const mealService = {
  getCategories: async () => {
    const response = await api.get<CategoryResponse>('categories.php');
    return response.data.categories;
  },

  getMealsByCategory: async (category: string) => {
    const response = await api.get<MealResponse>(`filter.php?c=${category}`);
    return response.data.meals;
  },

  getMealDetails: async (id: string) => {
    const response = await api.get<DetailResponse>(`lookup.php?i=${id}`);
    return response.data.meals[0];
  }
};