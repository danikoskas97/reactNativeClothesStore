
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import ProductCard from "../component/ProductCard";
import COLORS from "../assets/constants/colors";
const Category = ({ navigation }) => {
  const items = navigation.getParam("categorypProducts");
  Category.navigationOptions = (navigationData) => {
    const categoryName = navigationData.navigation.getParam("categoryName");

    return {
      headerTitle: categoryName,
      headerRight: () => (
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Amatic-Bold",
            marginRight: 10,
            color: COLORS.secondary,
          }}
        >
          {items.length} Items
        </Text>
      ),
    };
  };

  return (
    <ScrollView>
      {items.map((product, index) => (
        <ProductCard
          key={index}
          onSelect={() => {
            navigation.navigate({
              routeName: "Product",
              params: { productName: product.title },
            });
          }}
          title={product.title}
          imgUrl={product.imgUrl}
          price={product.final_price}
        />
      ))}
    </ScrollView>
  );
};

export default Category;