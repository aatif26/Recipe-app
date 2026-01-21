import 'react-native-gesture-handler';

import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RecipeListScreen from './src/screens/RecipeListScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          headerStyle: { backgroundColor: '#E91E63' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' } 
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Recipe Explorer' }} />
        <Stack.Screen name="RecipeList" component={RecipeListScreen} options={({ route }: any) => ({ title: route.params.category })} />
        <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'How to cook' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}