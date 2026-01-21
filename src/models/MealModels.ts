export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface MealSummary {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface MealDetail extends MealSummary {
  strCategory: string;
  strArea: string;
  strInstructions: string;
  [key: string]: any; // To handle dynamic strIngredient1, strIngredient2...
}

// API Response Wrappers
export interface CategoryResponse { categories: Category[]; }
export interface MealResponse { meals: MealSummary[]; }
export interface DetailResponse { meals: MealDetail[]; }