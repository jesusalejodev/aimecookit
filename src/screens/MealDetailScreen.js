import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { lookupMealById } from '../services/themealdbapi';

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const mealDetails = await lookupMealById(mealId);
      setMeal(mealDetails);
    };
    fetchMeal();
  }, [mealId]);

  if (!meal) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
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
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredients.push(
        <Text key={i} style={styles.ingredient}>{measure} {ingredient}</Text>
      );
    }
  }

  return ingredients;
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
