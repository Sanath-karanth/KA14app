import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/splashScreen';
import RegisterScreen from './src/screens/registerScreen';
import DashboardScreen from './src/screens/dashboardScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="splash"
    screenOptions={{
      headerShown: true
    }}>
      <Stack.Screen name="splash" options={{headerShown: false}} component={SplashScreen} />
      <Stack.Screen name="register" options={{headerShown: false}} component={RegisterScreen} />
      <Stack.Screen name="dashboard" options={{headerShown: false}} component={DashboardScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
