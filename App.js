import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen'; 
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;