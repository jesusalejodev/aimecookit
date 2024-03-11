import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Componente funcional RowPlato que muestra un elemento de comida en una fila
const RowPlato = ({ meal, onPress }) => {
  return (
    // Componente TouchableOpacity que actúa como contenedor de la fila y es sensible al tacto
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Imagen de la comida */}
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <View style={styles.textContainer}>
        {/* Título de la comida */}
        <Text style={styles.title}>{meal.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
  },
});

export default RowPlato;
