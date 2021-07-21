import React, { useState,useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import DataContextProvider from "./dummy-data/data";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import ShopNavigation from "./navigation/ShopNavigation";

const fetchFonts = async() => {
	// pass an object with all the fonts:
	// loadAsync returns a promise -> take a little longer

	await Font.loadAsync({
		// font-name(we use) : path to the font
		"titleFont": require("./assets/fonts/Staatliches-Regular.ttf"),
		"fontMashoo": require("./assets/fonts/StintUltraCondensed-Regular.ttf"),
		"contentFont": require("./assets/fonts/Poppins-Regular.ttf"),
		"boldContentFont": require("./assets/fonts/Poppins-Bold.ttf"),
		"Amatic-Bold": require("./assets/fonts/Amatic-Bold.ttf"),
		"AmaticSC-Regular": require("./assets/fonts/AmaticSC-Regular.ttf"),
	});
};


export default function App() {
	// function outside the App component:
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) 
		return (
			<AppLoading
				startAsync={()=>fetchFonts()}
				onFinish={() => setDataLoaded(true)}
				onError={() => console.log(err)}
			/>
		);
	
	return (
		<DataContextProvider>
		 <ShopNavigation/>
		</DataContextProvider>
		
	);
}