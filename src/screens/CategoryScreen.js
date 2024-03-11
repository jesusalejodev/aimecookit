import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RowPlato from '../components/rowplato';
import { filterMealByCategory } from '../services/themealdbapi';

const CategoryScreen = ({ route, navigation }) => {
  // Extraer la categoría de los parámetros de la ruta
  const { category } = route.params;

  // Estado para almacenar la lista de comidas
  const [meals, setMeals] = useState([]);

  // Efecto para cargar las comidas al montar el componente
  useEffect(() => {
    // Función asincrónica para obtener las comidas por categoría
    const fetchMeals = async () => {
      // Obtener las comidas filtradas por categoría desde el servicio API
      const mealsData = await filterMealByCategory(category.strCategory);
      // Actualizar el estado con las comidas obtenidas
      setMeals(mealsData);
    };
    // Llamar a la función fetchMeals al montar el componente
    fetchMeals();
  }, [category]); // Dependencia: category

  // Función para manejar el press en un plato
  const handleMealPress = (mealId) => {
    // Navegar a la pantalla MealDetail con el ID de la comida
    navigation.navigate('MealDetail', { mealId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals} // Datos de las comidas
        renderItem={({ item }) => (
          // Renderizar un componente RowPlato por cada comida
          <RowPlato meal={item} onPress={() => handleMealPress(item.idMeal)} />
        )}
        keyExtractor={(item) => item.idMeal} // Extraer clave única de cada comida
        contentContainerStyle={styles.listContainer} // Estilo del contenedor de la lista
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingTop: 10, // Espacio superior de la lista
  },
});

export default CategoryScreen;
