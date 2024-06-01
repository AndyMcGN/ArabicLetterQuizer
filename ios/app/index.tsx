import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FunctionComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { router } from 'expo-router';
import CustomButton from './components/CustomButton';

const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} />
      <Text style={styles.title}>
        Welcome to {'\n'} <Text style={styles.appName}>AlphaBetter</Text>
      </Text>
      <CustomButton text="Get Started" handlePress={() => router.push('/QuizView')} />
      <CustomButton text="SignUp" handlePress={() => router.push('/auth/SignUp')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '30%',
    marginBottom: '30%',
    backgroundColor: 'white',
    height: '100%',
  },

  title: {
    fontSize: 30,
    color: '#443549',
    textAlign: 'center',
  },
  appName: {
    fontSize: 40,
  },
});
