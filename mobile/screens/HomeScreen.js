import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TextInput,
  ScrollView,
  RefreshControl,
} from "react-native";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import styles from "../styles/homeStyles";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <>
            {/* Welcome Section */}
            <View style={styles.header}>
              <Text style={styles.welcome}>Welcome 👋</Text>
              <Text style={styles.subtitle}>Find your best products</Text>
            </View>

            {/* Search Bar */}
            <TextInput
              placeholder="Search products..."
              value={search}
              onChangeText={setSearch}
              style={styles.search}
            />

            {/* Categories */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoriesContainer}
            >
              <View style={styles.category}><Text>📱 Electronics</Text></View>
              <View style={styles.category}><Text>🎧 Audio</Text></View>
              <View style={styles.category}><Text>💻 Gadgets</Text></View>
              <View style={styles.category}><Text>🔥 Trending</Text></View>
            </ScrollView>

            {/* Section Title */}
            <Text style={styles.sectionTitle}>Featured Products</Text>
          </>
        }
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetail", { product: item })
            }
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No Products Found</Text>
        }
      />
    </View>
  );
}
