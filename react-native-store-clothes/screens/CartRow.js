import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../assets/constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";

const CartRow = ({
  title,
  delivery,
  finalPrice,
  quantity,
  priceWithDelivery,

}) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.details}>{title}</Text>
      <Text style={styles.details}>{delivery}</Text>
      <Text style={styles.details}>{finalPrice}</Text>
      <Text style={[styles.details, styles.quantity]}>{quantity}</Text>
      <Text style={styles.details}>{priceWithDelivery}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    borderBottomWidth: 10,
    borderStyle: "solid",
    borderBottomColor: "black",
  },
  details: {
    flexDirection: "row",
    fontSize: 20,
    fontFamily: "Amatic-Bold",
    width: 60,
    marginRight: 10,
    textAlign: "center",
  },
  quantity: {
    width: 20,
  },
});
export default CartRow;