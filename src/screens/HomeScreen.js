import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Importa el icono de lupa
import { listMealCategories } from '../services/themealdbapi'; // Importa la función para obtener categorías de comidas

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]); // Define un estado para almacenar las categorías de comidas

  useEffect(() => {
    // Carga las categorías cuando el componente se monta
    const fetchCategories = async () => {
      const categoriesData = await listMealCategories(); // Obtiene las categorías de comidas de la API
      setCategories(categoriesData); // Actualiza el estado con las categorías obtenidas
    };
    fetchCategories(); // Llama a la función para cargar las categorías
  }, []); 

  const handleCategoryPress = (category) => {
    navigation.navigate('Category', { category }); // Navega a la pantalla 'Category' con la categoría seleccionada
  };

  const renderItem = ({ item }) => (
    // Renderiza un elemento de categoría en la lista plana
    <TouchableOpacity
      style={[styles.card, styles.shadow]}
      onPress={() => handleCategoryPress(item)}
    >
      <Image
        source={{ uri: item.strCategoryThumb }}
        style={styles.categoryImage}
      />
      <Text style={styles.categoryText}>{item.strCategory}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Muestra una imagen de fondo */}
      <Image
        style={styles.homeimg}
        source={require('/WSReactNative/aimecookit/assets/homeimg.jpeg')}
      />
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <View style={styles.row}>
        {/* Muestra el encabezado y la lupa */}
        <Text style={styles.heading}>Explora por categorías</Text>
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => navigation.navigate('Find')}
        >
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Muestra la lista de categorías */}
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.idCategory}
        numColumns={2} // Muestra las categorías en dos columnas
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  homeimg: {
    height: 250,
    width: 400,

  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  searchIcon: {
    marginLeft: 90,
  },
  welcomeText: {
    position: 'absolute',
    top: '22%',
    left: '5%',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Color de la sombra
    textShadowOffset: { width: 2, height: 2 }, // Offset de la sombra (horizontal y vertical)
    textShadowRadius: 5, // Radio de la sombra
    zIndex: 1, // Asegura que el texto esté sobre la imagen
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    flexBasis: '43%', 
  },
  categoryImage: {
    width: 150,
    height: 100,
    borderRadius: 15,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '400',
    color: '#243030',
  },
});

export default HomeScreen; 