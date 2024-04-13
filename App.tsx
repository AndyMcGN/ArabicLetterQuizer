import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import QuizView from './QuizView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';

export type RootStackParamList = {
    Home: undefined;
    Quiz: undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={QuizView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
