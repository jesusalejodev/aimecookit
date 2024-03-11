// Define la URL base para todas las llamadas a la API de TheMealDB
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Función asincrónica para buscar una comida por su nombre
export const searchMealByName = async (mealName) => {
  try {
    // Realiza una solicitud de búsqueda al servidor utilizando el nombre de la comida
    const response = await fetch(`${BASE_URL}/search.php?s=${mealName}`);
    // Parsea la respuesta como JSON
    const data = await response.json();
    // Retorna la lista de comidas si se encuentran, de lo contrario, retorna un array vacío
    return data.meals || [];
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la búsqueda
    console.error('Error searching meal by name:', error);
    return []; // Retorna un array vacío en caso de error
  }
};

// Función asincrónica para obtener detalles de una comida por su ID
export const lookupMealById = async (mealId) => {
  try {
    // Realiza una solicitud para obtener detalles de la comida utilizando su ID
    const response = await fetch(`${BASE_URL}/lookup.php?i=${mealId}`);
    // Parsea la respuesta como JSON
    const data = await response.json();
    // Retorna los detalles de la comida si se encuentran, de lo contrario, retorna null
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la búsqueda
    console.error('Error looking up meal by id:', error);
    return null; // Retorna null en caso de error
  }
};

// Función asincrónica para obtener una lista de categorías de comidas
export const listMealCategories = async () => {
  try {
    // Realiza una solicitud para obtener la lista de categorías de comidas
    const response = await fetch(`${BASE_URL}/categories.php`);
    // Parsea la respuesta como JSON
    const data = await response.json();
    // Retorna la lista de categorías de comidas si se encuentran, de lo contrario, retorna un array vacío
    return data.categories || [];
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la búsqueda
    console.error('Error listing meal categories:', error);
    return []; // Retorna un array vacío en caso de error
  }
};

// Función asincrónica para filtrar comidas por una categoría específica
export const filterMealByCategory = async (categoryName) => {
  try {
    // Realiza una solicitud para filtrar comidas por una categoría específica
    const response = await fetch(`${BASE_URL}/filter.php?c=${categoryName}`);
    // Parsea la respuesta como JSON
    const data = await response.json();
    // Retorna la lista de comidas si se encuentran, de lo contrario, retorna un array vacío
    return data.meals || [];
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la búsqueda
    console.error('Error filtering meal by category:', error);
    return []; // Retorna un array vacío en caso de error
  }
};
