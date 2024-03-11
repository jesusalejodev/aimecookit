import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import RowPlato from '../components/rowplato';
import { searchMealByName } from '../services/themealdbapi';

const FindScreen = ({ navigation }) => {
  // Estado para almacenar el texto de búsqueda
  const [searchText, setSearchText] = useState('');
  // Estado para almacenar los resultados de búsqueda
  const [searchResults, setSearchResults] = useState([]);

  // Función para manejar la búsqueda
  const handleSearch = async () => {
    const results = await searchMealByName(searchText);
    setSearchResults(results);
  };

  // Función para manejar el clic en un resultado de búsqueda
  const handleResultPress = (mealId) => {
    navigation.navigate('MealDetail', { mealId });
  };

  return (
    <View style={styles.container}>
      {/* Input para ingresar el texto de búsqueda */}
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Buscar plato por nombre"
        onSubmitEditing={handleSearch}
      />
      {/* Lista de resultados de búsqueda */}
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          //componente Card de la receta
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
