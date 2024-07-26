import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import WalletConnect from './src/screens/WalletConnect';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Choice from './src/screens/Choice';
import Home from './src/screens/Home';
import AddingProperties from './src/screens/AddingProperties';
import VideoScreen from './src/screens/VideoScreen';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Choice"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Choice" component={Choice} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddingProperties" component={AddingProperties} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
