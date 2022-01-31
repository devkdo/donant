import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import colours from '../config/colours';

function Button(props) {
  const { onPress, title = 'Click' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

function WhiteButton(props) {
  const { onPress, title = 'Click' } = props;
  return (
    <Pressable style={styles.buttonWhite} onPress={onPress}>
      <Text style={styles.textBlack}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    // borderRadius: 4,
    elevation: 3,
    backgroundColor: colours.black,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonWhite: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    // borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  textBlack: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colours.black,
  },
})

export { Button, WhiteButton };
