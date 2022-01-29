import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function LoginScreen(props) {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo-bw.png')}/>
				<Text>Catalyst Your Dream Into Reality</Text>
			</View>
			<View style={styles.button}>
				<Text style={[styles.buttonText, styles.setColorWhite]}>Login</Text>
			</View>
			<View style={[styles.button, styles.setBackgroundWhite]}>
				<Text style={styles.buttonText}>Signup</Text>
			</View>
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
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: 'center',
	},
	button: {
		width: "100%",
		height: 70,
		backgroundColor: "black",
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 22,
		color: "black",
		textAlign: 'center',
		fontWeight: 'bold',
	},
	setColorWhite: {
		color: "#f0f8ff",
	},
	setBackgroundWhite: {
		backgroundColor: "#f0f8ff",
	},
})

export default LoginScreen;