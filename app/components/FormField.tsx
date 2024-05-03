import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native';
import React, { FunctionComponent, useState } from 'react';

interface FormFieldProps<T> {
  name: string;
  keyboardType?: KeyboardTypeOptions;
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
}

const FormField: FunctionComponent<FormFieldProps<any>> = ({ name, keyboardType, data, setData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={(e) => setData(e)}
        keyboardType={keyboardType}
      ></TextInput>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: { width: '100%' },
  title: {
    fontSize: 25,
    margin: 5
  },
  input: {
    fontSize: 20,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
});
