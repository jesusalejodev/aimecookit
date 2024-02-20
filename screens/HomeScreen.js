import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 10, alignItems: 'center' }}
      onPress={() => navigation.navigate('Category', { category: item })}
    >
      <Image
        source={{ uri: item.strCategoryThumb }}
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />
      <Text style={{ marginTop: 10, fontSize: 18 }}>{item.strCategory}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Meal Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.idCategory}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;
