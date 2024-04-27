import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  option: {
    height: '20%',
    width: '40%',
    backgroundColor: 'green',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
