import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity,ImageBackground } from "react-native";
import COLORS from "../assets/constants/colors";
import Category from "../screens/Category";

const CategoryCard = (props) => {

	return (
		<TouchableOpacity onPress={props.onSelect}>
			<View style={styles.cardContainer}>
				<ImageBackground
					style={styles.imgBG}
					imageStyle={{ resizeMode: "contain" }}
					source={{ uri: props.imgUrl }}>
					<View style={styles.productTitle}>
						<Text style={styles.titleContent}>{props.name}</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 200,
		backgroundColor: COLORS.secondary,
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},
	imgBG: {
		flex: 1,
		width: "100%",
		height: 250,
		justifyContent: "flex-start"
	},
	titleContent: {
		color: COLORS.secondary,
		textAlign: "center",
		fontSize: 30,
		fontFamily: "Amatic-Bold",
	},
	cardContainer: {
		backgroundColor: COLORS.secondary,
		width: "100%",
		shadowColor: "black",
		shadowRadius: 10,
		shadowOpacity: 1,
		padding: 10,
		justifyContent:'center'
	},
	productTitle:{
		width:89,
		alignSelf:'center',
		borderRadius:0.1,
		backgroundColor:'rgb(0, 0, 0)'
	}
});
export default CategoryCard;

