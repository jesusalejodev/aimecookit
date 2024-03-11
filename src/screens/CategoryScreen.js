import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RowPlato from '../components/rowplato';
import { filterMealByCategory, searchMealByName } from '../services/themealdbapi';

const CategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const mealsData = await filterMealByCategory(category.strCategory);
      setMeals(mealsData);
    };
    fetchMeals();
  }, [category]);

  const handleMealPress = (mealId) => {
    navigation.navigate('MealDetail', { mealId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={({ item }) => (
          <RowPlato meal={item} onPress={() => handleMealPress(item.idMeal)} />
        )}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingTop: 10,
  },
});

export default CategoryScreen;
