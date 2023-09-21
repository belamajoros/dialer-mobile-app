import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const baseContainer = {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: 'grey',
  };

const baseText = {
    fontSize: 36,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...baseContainer
    },
    specialContainer: {
       flex: 2,
       backgroundColor: '#9bc23c',
       ...baseContainer,
    },
    specialContainer2: {
      flex: 2,
      backgroundColor: 'red',
      ...baseContainer,
   },
    text: baseText,
    specialText: {
      ...baseText,
      color: 'white',
    },
});

const Button = ({ text, special, onPress }) => (
    <TouchableOpacity onPress={ () => onPress(text) & console.log("You pressed "+ text)} style={special && text == "Call" ? styles.specialContainer : (special && text == "Decline" ? styles.specialContainer2 : styles.container)}>
      <Text style={special ? styles.specialText : styles.text}>{text}</Text>
    </TouchableOpacity>
  );

  export default Button;