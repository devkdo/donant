import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colours from '../config/colours';
import LoginScreen from './LoginScreen';

function HomeScreen({ navigation }) {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/wood.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo-bw.png')} />
			</View>
			<View style={styles.post} />
			<Button>
				title="Signout"
				onPress={() => navigation.navigate('Login')}
			</Button>

			{/* 			<View style={styles.button}>
				<Text style={[styles.buttonText, styles.setColorPrimary]}>Login</Text>
			</View>
			<View style={[styles.button, styles.setBackgroundPrimary]}>
				<Text style={styles.buttonText}>Signup</Text>
			</View> */}
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: 'center',
	},
	logo: {
		width: 50,
		height: 50,
	},
	logoContainer: {
		position: "absolute",
		top: 20,
		left: 20,
		// alignItems: 'center',
	},
	post: {
		width: "60%",
		height: 70,
		backgroundColor: colours.black,
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 22,
		color: colours.black,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	setColorPrimary: {
		color: colours.primary,
	},
	setBackgroundPrimary: {
		backgroundColor: colours.primary,
	}
})

export default HomeScreen;