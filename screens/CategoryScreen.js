import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
      .then(response => response.json())
      .then(data => {
        setMeals(data.meals);
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
      });
  }, [category]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log(item)} // Aquí podrías navegar a la pantalla de detalles del plato si lo deseas
    >
      <Image
        source={{ uri: item.strMealThumb }}
        style={styles.mealImage}
      />
      <View style={styles.mealInfo}>
        <Text style={styles.mealTitle}>{item.strMeal}</Text>
        <Text numberOfLines={2} style={styles.mealDescription}>{item.strInstructions}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Image
          source={{ uri: category.strCategoryThumb }}
          style={styles.categoryImage}
        />
      <Text style={styles.heading}>Platos de {category.strCategory}</Text>
      <FlatList
        data={meals}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  categoryImage: {
    width: 150,
    height: 100,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center', // Alinear la imagen verticalmente al centro
  },
  mealImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  mealInfo: {
    flex: 1,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mealDescription: {
    fontSize: 14,
  },
});

export default CategoryScreen;
