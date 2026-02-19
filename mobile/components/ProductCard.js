import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/productCardStyles";

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      
      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹ {product.price}</Text>
        </View>
      </View>

    </TouchableOpacity>
  );
}
