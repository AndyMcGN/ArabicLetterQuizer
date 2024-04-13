import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FunctionComponent } from 'react';
import { Text, View, Button } from 'react-native';
import { RootStackParamList } from './App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>AlphaBetter</Text>
      <Button title="Start" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
};

export default Home;
