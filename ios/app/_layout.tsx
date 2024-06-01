import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Slot></Slot>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
});
