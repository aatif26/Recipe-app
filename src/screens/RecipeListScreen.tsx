import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { Meal } from '../models/MealModels';
import { mealService } from '../api/mealService';

const RecipeListScreen = ({ route, navigation }: any) => {
  const { category } = route.params;
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    mealService.getMealsByCategory(category).then(setMeals);
  }, [category]);

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={item => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listCard}
            onPress={() =>
              navigation.navigate('Details', { mealId: item.idMeal })
            }
          >
            <Image
              source={{ uri: item.strMealThumb }}
              style={styles.listImage}
            />
            <Text style={styles.listText}>{item.strMeal}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  listCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  listImage: { width: 60, height: 60, borderRadius: 30 },
  listText: { marginLeft: 15, fontSize: 16, fontWeight: '500', flex: 1 },
});

export default RecipeListScreen;
