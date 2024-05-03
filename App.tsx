import { FunctionComponent } from 'react';
import QuizView from './QuizView';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';

export type RootTabsParamList = {
  Home: undefined;
  Quiz: undefined;
};
const Tab = createBottomTabNavigator<RootTabsParamList>();
const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false,  }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Quiz" component={QuizView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
