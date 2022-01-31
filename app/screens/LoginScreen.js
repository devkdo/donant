import React from 'react';
import { Pressable, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, WhiteButton } from '../components/Button';
import colours from '../config/colours';

function LoginScreen({navigation}) {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo-bw.png')}/>
				<Text>Catalyst Your Dream Into Reality</Text>
			</View>
			
			<View  style={styles.buttonContainer}>
				<Button title="Login" onPress={() => navigation.navigate('HomeScreen')} />
				<WhiteButton title="Signup" onPress={() => navigation.navigate('HomeScreen')} />
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
	buttonContainer: {
		width: "80%",
		height: 70,
		marginBottom: 50,
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