import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { Category } from '../models/MealModels';
import { mealService } from '../api/mealService';

const HomeScreen = ({ navigation }: any) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mealService
      .getCategories()
      .then(setCategories)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.idCategory}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('RecipeList', { category: item.strCategory })
            }
          >
            <Image
              source={{ uri: item.strCategoryThumb }}
              style={styles.image}
            />
            <Text style={styles.text}>{item.strCategory}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 10 },
  loader: { flex: 1, justifyContent: 'center' },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  image: { width: 100, height: 100 },
  text: { marginTop: 8, fontWeight: 'bold' },
});

export default HomeScreen;
