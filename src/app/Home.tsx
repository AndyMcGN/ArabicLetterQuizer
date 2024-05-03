import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FunctionComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { RootTabsParamList } from './App';
type Props = NativeStackScreenProps<RootTabsParamList, 'Home'>;

const Home: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} />
      <Text style={styles.title}>
        Welcome to {'\n'} <Text style={styles.appName}>AlphaBetter</Text>
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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
  },
  title: {
    fontSize: 30,
    color: '#443549',
    textAlign: 'center',
  },
  appName: {
    fontSize: 40,
  },

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
