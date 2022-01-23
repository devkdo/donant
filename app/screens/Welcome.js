import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sell What You Don't Need</Text>
    </View>
  );
}
  
const styles = StyleSheet.create({
	container: {
		marginTop: 6
	}
})

export default Welcome;