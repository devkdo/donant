import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/Welcome';

const Root = createStackNavigator();/* 

const Screen1 = ({ navigation, route }) => (
	<View style={styles.screen}>
		<Text style={styles.title}>Screen 1</Text>
		<Button
			title="Go to Screen 2"
			onPress={() => {
				navigation.push('Screen2')
			}}
		/>
	</View>
)
const Screen2 = ({ navigation, route }) => (
	<View style={styles.screen}>
		<Text style={styles.title}>Screen 2</Text>
		<Button
			title="Go back"
			onPress={() => {
				navigation.pop()
			}}
		/>
	</View>
) */


export default function App() {
  return (
	  <View style={styles.container}>
		{/* <Text>Open up App.js to start working on your app!</Text> */}
		{/* <StatusBar style="auto" /> */}
	  </View>

	{/* <NavigationContainer>
		<Root.Navigator>
			<Root.Screen name="Welcome" component={Welcome} />
			 <Root.Screen name="Screen2" component={Screen2} />
		</Root.Navigator>
	</NavigationContainer> */}
	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// const styles = StyleSheet.create(
// 	screen: {
// 	  marginTop: 40,
// 	  alignItems: 'center',
// 	},
// 	title: {
// 	  padding: 20,
// 	  fontSize: 42,
// 	},
//   })