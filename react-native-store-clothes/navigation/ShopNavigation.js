import React from "react";
import { Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ProductScreen from "../screens/Product";
import CategoryScreen from "../screens/Category";
import HomeScreen from "../screens/Home";
import PaymentScreen from "../screens/PaymentForm";
import CartScreen from "../screens/Cart";
import OrderMessageScreen from "../screens/OrderMessage";

import COLORS from "../assets/constants/colors";

const ShopNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Category: CategoryScreen,
    Product: ProductScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
    },
  }
);

// tab navigator -
const ShoppingCart = createBottomTabNavigator(
  {
    Shop: {
      screen: ShopNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Entypo name="shop" size={24} color={COLORS.iconColor} />;
        },
      },
    },
    Cart: {
      screen: createStackNavigator(
        {
          Cart: CartScreen,
          Payment: PaymentScreen,
          OrderMessage: OrderMessageScreen,
        },
        {
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: Platform.OS === "android" ? COLORS.primary : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : COLORS.primary,
          },
        }
      ),

      navigationOptions: {
        tabBarLabel: "Cart",
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="shoppingcart" size={24} color={COLORS.iconColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.primary,
    },
  }
);

export default createAppContainer(ShoppingCart);