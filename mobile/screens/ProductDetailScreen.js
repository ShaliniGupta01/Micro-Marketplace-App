// // /* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/productDetailStyles";

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.container}>
      
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* ❤️ Heart Icon */}
      <TouchableOpacity style={styles.heartIcon} onPress={toggleFavorite}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={30}
          color={isFavorite ? "red" : "white"}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>₹ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>

        {/* 🚀 Deliver Button */}
        {/* <TouchableOpacity
          style={styles.deliverBtn}
          onPress={() => navigation.navigate("Deliverables")}
        >
          <Text style={styles.deliverText}>Go to Deliverables</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
  style={styles.deliverBtn}
  onPress={() =>
    navigation.navigate("Deliverables", { deliveredProduct: product })
  }
>
  <Text style={styles.deliverText}>Deliver This Product</Text>
</TouchableOpacity>

      </View>
    </ScrollView>
  );
}
