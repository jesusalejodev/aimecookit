import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { lookupMealById } from '../services/themealdbapi'; // Importa función de la API para buscar detalles de una comida por ID

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params; // Obtiene el ID de la comida de las props de la ruta
  const [meal, setMeal] = useState(null); // Define el estado para almacenar detalles de la comida

  useEffect(() => {
    // Carga los detalles de la comida cuando cambia el ID de la comida
    const fetchMeal = async () => {
      const mealDetails = await lookupMealById(mealId); // Obtiene detalles de la comida por su ID
      setMeal(mealDetails); // Actualiza el estado con los detalles de la comida obtenidos
    };
    fetchMeal(); // Llama a la función para cargar detalles de la comida
  }, [mealId]); // El efecto se ejecuta cada vez que cambia el ID de la comida

  if (!meal) {
    // Si no hay detalles de la comida, muestra un mensaje de carga
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    // Muestra detalles de la comida cuando están disponibles
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={{ uri: meal.strMealThumb }} 
          style={styles.mealImage}
        />
        <View style={styles.mealDetailsContainer}>
          <Text style={styles.mealTitle}>{meal.strMeal}</Text> 
          <Text style={styles.mealCategory}>Category: {meal.strCategory}</Text>
          <Text style={styles.mealArea}>Area: {meal.strArea}</Text> 
          <Text style={styles.mealIngredientsTitle}>Ingredients:</Text> 
          {renderIngredients(meal)} 
          <Text style={styles.mealInstructionsTitle}>Instructions:</Text>
          <Text style={styles.mealInstructions}>{meal.strInstructions}</Text> 
        </View>
      </ScrollView>
    </View>
  );
};

const renderIngredients = (meal) => {
  // Función para renderizar los ingredientes de la comida
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]; // Obtiene el ingrediente por su índice
    const measure = meal[`strMeasure${i}`]; // Obtiene la medida del ingrediente por su índice

    if (ingredient && measure) {
      ingredients.push(
        <Text key={i} style={styles.ingredient}>{measure} {ingredient}</Text> // Agrega el ingrediente y su medida a la lista de ingredientes
      );
    }
  }

  return ingredients; // Retorna la lista de ingredientes renderizados
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  mealImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  mealDetailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Superponer sobre la imagen
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealCategory: {
    fontSize: 18,
    marginBottom: 5,
  },
  mealArea: {
    fontSize: 18,
    marginBottom: 10,
  },
  mealIngredientsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5,
  },
  mealInstructionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  mealInstructions: {
    fontSize: 16,
  },
});

export default MealDetailScreen; 

