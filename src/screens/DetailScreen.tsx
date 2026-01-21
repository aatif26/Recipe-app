import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { MealDetail } from '../models/MealModels';
import { mealService } from '../api/mealService';

const DetailScreen = ({ route }: any) => {
  const [meal, setMeal] = useState<MealDetail | null>(null);

  useEffect(() => {
    mealService.getMealDetails(route.params.mealId).then(setMeal);
  }, []);

  if (!meal) return <ActivityIndicator style={{ flex: 1 }} />;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`,
      );
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.banner} />
      <View style={styles.content}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.subtitle}>
          {meal.strCategory} | {meal.strArea}
        </Text>

        <Text style={styles.header}>Ingredients</Text>
        {ingredients.map((ing, index) => (
          <Text key={index} style={styles.item}>
            • {ing}
          </Text>
        ))}

        <Text style={styles.header}>Instructions</Text>
        <Text style={styles.instructions}>{meal.strInstructions}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  banner: { width: '100%', height: 250 },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { color: 'gray', marginVertical: 5 },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#E91E63',
  },
  item: { fontSize: 16, marginBottom: 4 },
  instructions: { fontSize: 16, lineHeight: 22, textAlign: 'justify' },
});

export default DetailScreen;
