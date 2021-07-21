import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { DataContext } from "../dummy-data/data";
import CategoryCard from "../component/CategoryCard";
import Category from "./Category";

const Home = (props) => {
  const { categories } = useContext(DataContext);

  return (
    <ScrollView>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          onSelect={() =>
            props.navigation.navigate({
              routeName: "Category",
              params: {
                categorypProducts: category.items,
                categoryName: category.name,
              },
            })
          }
          name={category.name}
          items={category.items}
          imgUrl={category.imgUrl}
          navigation={props.navigation}
          route={props.route}
        />
      ))}
    </ScrollView>
  );
};

export default Home;
