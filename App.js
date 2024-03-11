import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen'; 
import MealDetailScreen from './src/screens/MealDetailScreen';
import FindScreen from './src/screens/FindScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Pantalla principal de la aplicación */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* Pantalla de categorías */}
        <Stack.Screen name="Category" component={CategoryScreen} />
        {/* Pantalla de detalles de plato */}
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        {/* Pantalla de búsqueda */}
        <Stack.Screen name="Find" component={FindScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;