import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colours from '../config/colours';

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
				<Text style={[styles.buttonText, styles.setColorPrimary]}>Login</Text>
			</View>
			<View style={[styles.button, styles.setBackgroundPrimary]}>
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
	},
})

export default LoginScreen;