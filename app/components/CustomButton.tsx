import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';

interface Props {
  text: string;
  handlePress: (event: GestureResponderEvent) => void;
}

const CustomButton: FunctionComponent<Props> = ({ text, handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#ce1fa2',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
