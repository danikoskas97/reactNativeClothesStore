import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { DataContext } from "../dummy-data/data";
import CartRow from "./CartRow";
import COLORS from "../assets/constants/colors.js";

const Cart = ({ navigation }) => {
  const { shoppingCart, coupons } = useContext(DataContext);
  const [quantity, setQuantity] = useState({});
  const [cartPresentation, setCartPresentation] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState();
  const [currentPrice, setCurrentPrice] = useState();

  const handleOnChange = (text) => setAppliedCoupon(text);

  const handleCoupon = () => {
    const currentCoupon = coupons.find(
      (coupon) => coupon.couponCode === appliedCoupon
    );

    setCurrentPrice(
      cartPresentation.reduce(
        (total, product) =>
          total +
          (parseInt(product.final_price) + parseInt(product.delivery)) *
            parseInt(quantity[product.title]),
        0
      )
    );

    if (currentCoupon) {
      setCurrentPrice(
        (prev) => prev - (prev * currentCoupon.discountPercent) / 100
      );
    }
  };

  useEffect(() => {
    const tempQuantity = {};
    shoppingCart.forEach((product) => {
      tempQuantity[product.title]
        ? tempQuantity[product.title]++
        : (tempQuantity[product.title] = 1);
    });
    setQuantity(tempQuantity);
    const tempProductPresentation = [];
    for (let i = 0; i < shoppingCart.length; i++) {
      if (
        tempProductPresentation.find(
          (product) => shoppingCart[i].title === product.title
        ) == undefined
      ){
      tempProductPresentation.push(shoppingCart[i]);
    }
    setCartPresentation(tempProductPresentation);
  }
  },
   [shoppingCart]);

  const deleteRow = (key) => {
    setCartPresentation((prev) => prev.filter((product) => prev[key] !== product));
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>Product Name</Text>
        <Text style={styles.details}>Delvery Price</Text>
        <Text style={styles.details}>Price</Text>
        <Text style={[styles.details, styles.quantity]}>id</Text>
        <Text style={styles.details}>final Price</Text>
      </View>
      {cartPresentation.map((product, index) => (
        <CartRow
          key={index}
          title={product.title}
          delivery={product.delivery}
          finalPrice={product.final_price}
          quantity={quantity[product.title]}
          priceWithDelivery={parseInt(product.final_price) + parseInt(product.delivery)}
          totalForThisItem={
            (parseInt(product.final_price) + parseInt(product.delivery)) *
            quantity[product.title]
          }
        />
      ))}
      <View style={styles.cost}>
        <Text style={styles.costText}>Total before Copun: </Text>

        {cartPresentation.length > 0 ? (
          <Text style={styles.costText}>
            {cartPresentation.reduce(
              (total, product) =>
                total +
                (parseInt(product.final_price) + parseInt(product.delivery)) *
                  parseInt(quantity[product.title]),
              0
            )}
          </Text>
        ) : (
          <Text></Text>
        )}
      </View>
      <View style={styles.cost}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => handleOnChange(text)}
          placeholder={"You have a copun ? "}
        />

        <TouchableOpacity onPress={handleCoupon} style={styles.couponBtn}>
          <Text style={styles.couponText}>Discount</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cost}>
        <Text style={styles.costText}>Final price: </Text>
        <Text>{currentPrice}</Text>
      </View>
      <View style={styles.purchaseContainer}>
        <TouchableOpacity
          style={styles.couponBtn}
          onPress={() =>
            shoppingCart.length > 0 && navigation.navigate("Payment")
          }
        >
          <Text style={styles.couponText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  detailsContainer: {
    flexDirection: "row",
  },
  details: {
    fontSize: 22,
    fontFamily: "Amatic-Bold",
    width: 60,
    marginRight: 10,
    textAlign: "center",
  },
  cost: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 22,
  },
  costText: {
    fontSize: 22,
  },
  quantity: {
    width: 20,
  },
  inputStyle: {
    height: 40,
    width: "50%",
    paddingHorizontal: 10,
    borderRadius: 1,
    backgroundColor: "white",
    marginRight: 5,
  },
  couponBtn: {
    width: "50%",
    height: 40,
    backgroundColor: 'green',
    padding: 5,
    flexDirection: "row",
    borderRadius: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  couponText: {
    fontSize: 14,
    fontFamily: "Amatic-Bold",
    color: COLORS.secondary,
    marginRight: 10,
  },
  purchaseContainer: {
    marginTop: 6,
    alignItems: "center",
  },
});

export default Cart;