import React, { FC, ReactNode } from 'react';
import { AnimatableNumericValue, StyleSheet, Text, View } from 'react-native';

export const Options = (props: { children: ReactNode }) => {
  return <View style={styles.options}>{props.children}</View>;
};

interface OptionProps {
  letter: string;
  handleGuess: (letter: string) => void;
}
export const Option: FC<OptionProps> = ({ letter, handleGuess }) => {
  return (
    <View style={styles.option} onTouchEnd={() => handleGuess(letter)}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  options: {
    height: '50%',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'space-around',
  },
  option: {
    backgroundColor: 'green',
    borderRadius: 9999,
    margin: 15,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
