import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import COLORS from "../assets/constants/colors";
import { NavigationActions, StackActions } from "react-navigation";

const OrderMessage = ({ navigation }) => {
  OrderMessage.navigationOptions = (navigationData) => {
    return {
      headerLeft: () => <Text></Text>,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.content}>yes!!!!!</Text>
      <Text style={styles.content}>Your clothes in a way</Text>
      <View style={styles.btnContainer}>
        <Button
          style={styles.btn}
          color={COLORS.primary}
          title={"Back to Buy more"}
          onPress={() => {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  routeName: "Cart",
                }),
                NavigationActions.navigate({
                  routeName: "Payment",
                }),
                NavigationActions.navigate({
                  routeName: "OrderMessage",
                }),
              ],
            });
            navigation.dispatch(resetAction);
            navigation.navigate("HomePage");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    fontFamily: "Amatic-Bold",
    fontSize: 24,
    textAlign: "center",
  },
  btnContainer: {},
});

export default OrderMessage;