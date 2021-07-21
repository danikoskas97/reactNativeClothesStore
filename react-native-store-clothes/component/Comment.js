import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from '../assets/constants/colors'


const Comment = ({  userName, msg }) => {


	return (
		<View style={styles.commentContainer}>
			<View style={styles.userDetails}>
				<Text style={styles.userName}>{userName}</Text>
			</View>
			<Text style={styles.msg}>{msg}</Text>
		</View>
	);
};

export default Comment;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",

	},
	userDetails: {
		flexDirection: "row",
		alignItems:'center',
		backgroundColor:COLORS.primary,
		borderTopLeftRadius:200,
		borderBottomLeftRadius:200
	},
	userName:{
		fontFamily:'Amatic-Bold',
		paddingLeft:10,
		paddingRight:10,
		color:COLORS.secondary

	},
	commentContainer:{
		marginBottom:30,
		width:'100%'
	},
	msg:{
		fontFamily:'Amatic-Bold',
		paddingLeft:13
	}
});