const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchMealByName = async (mealName) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${mealName}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error searching meal by name:', error);
    return [];
  }
};

export const lookupMealById = async (mealId) => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error('Error looking up meal by id:', error);
    return null;
  }
};

export const listMealCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories.php`);
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('Error listing meal categories:', error);
    return [];
  }
};

export const filterMealByCategory = async (categoryName) => {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?c=${categoryName}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error filtering meal by category:', error);
    return [];
  }
};
