import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import RowPlato from '../components/rowplato';
import { searchMealByName } from '../services/themealdbapi';

const FindScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const results = await searchMealByName(searchText);
    setSearchResults(results);
  };

  const handleResultPress = (mealId) => {
    navigation.navigate('MealDetail', { mealId });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Buscar plato por nombre"
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <RowPlato meal={item} onPress={() => handleResultPress(item.idMeal)} />
        )}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default FindScreen;
