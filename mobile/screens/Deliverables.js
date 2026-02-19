import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import styles from "../styles/deliverablesStyles";


export default function Deliverables({ route }) {
  const deliveredProduct = route?.params?.deliveredProduct;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📦 Delivered Product</Text>

      {/* ✅ If Product Exists */}
      {deliveredProduct ? (
        <View style={styles.productCard}>
          <Image
            source={{ uri: deliveredProduct.image }}
            style={styles.image}
          />

          <Text style={styles.productTitle}>
            {deliveredProduct.title}
          </Text>

          <Text style={styles.price}>
            ₹ {deliveredProduct.price}
          </Text>

          <Text style={styles.description}>
            {deliveredProduct.description}
          </Text>
        </View>
      ) : (
        <Text style={styles.noProduct}>
          No product delivered yet.
        </Text>
      )}

      {/* 📋 Project Deliverables Info */}
      <View style={styles.infoCard}>
        <Text style={styles.heading}>🔐 Authentication</Text>
        <Text style={styles.item}>• User Login with JWT</Text>
        <Text style={styles.item}>• AsyncStorage Token</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.heading}>🛍 Product Features</Text>
        <Text style={styles.item}>• Browse Products</Text>
        <Text style={styles.item}>• View Details</Text>
        <Text style={styles.item}>• Favorite / Unfavorite</Text>
      </View>
    </ScrollView>
  );
}
