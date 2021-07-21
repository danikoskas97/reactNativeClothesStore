import React,{useContext} from "react";
import { View, Text, StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
import COLORS from "../assets/constants/colors";
import {DataContext} from '../dummy-data/data'
const ProductCard = ({onSelect, imgUrl, title, price }) => {
	const {numberWithCommas}  = useContext(DataContext)
	return (
		<TouchableOpacity onPress={onSelect} style={styles.container}>
			<View style={styles.cardContainer}>
				<ImageBackground
					style={styles.imgBG}
					imageStyle={{ resizeMode: "cover" }}
					source={{ uri: imgUrl }}>
					<View style={styles.productTitle}>
						<Text style={styles.titleContent}>{title}</Text>
						<Text style={styles.titleContent}>{numberWithCommas(price)}Nis</Text>
					</View>
				</ImageBackground>
			</View>	
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.secondary,
		alignItems: "center",
		justifyContent: "center",
		
	},
	imgBG: {
		flex: 1,
		width: "100%",
		height:250,
		justifyContent: "flex-end",
	},
	titleContent: {
		color: COLORS.secondary,
		textAlign: "center",
		fontSize: 30,
		fontFamily: "Amatic-Bold",
	},
	cardContainer:{
		backgroundColor: COLORS.secondary,
		width:'90%',
		shadowColor: "blue",
		shadowRadius: 1,
		shadowOpacity: 3,
		padding: 10,
	},
	productTitle:{
		width:200,
		alignSelf:'center',
		borderRadius:0.1,
		backgroundColor:'rgb(0, 0, 0)'
	}
});
export default ProductCard;