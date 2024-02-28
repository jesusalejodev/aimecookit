import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => response.json())
      .then(data => {
        setMealDetails(data.meals[0]);
      })
      .catch(error => {
        console.error('Error fetching meal details:', error);
      });
  }, [mealId]);

  if (!mealDetails) {
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
          source={{ uri: mealDetails.strMealThumb }}
          style={styles.mealImage}
        />
        <View style={styles.mealDetailsContainer}>
          <Text style={styles.mealTitle}>{mealDetails.strMeal}</Text>
          <Text style={styles.mealCategory}>Category: {mealDetails.strCategory}</Text>
          <Text style={styles.mealArea}>Area: {mealDetails.strArea}</Text>
          <Text style={styles.mealIngredientsTitle}>Ingredients:</Text>
          {renderIngredients(mealDetails)}
          <Text style={styles.mealInstructionsTitle}>Instructions:</Text>
          <Text style={styles.mealInstructions}>{mealDetails.strInstructions}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const renderIngredients = (mealDetails) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = mealDetails[`strIngredient${i}`];
    const measure = mealDetails[`strMeasure${i}`];

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
