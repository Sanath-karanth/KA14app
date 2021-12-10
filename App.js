import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './src/screens/splashScreen';
import RegisterScreen from './src/screens/registerScreen';
import DashboardScreen from './src/screens/dashboardScreen';
import TravelScreen from './src/screens/travelScreen';
import DrawerScreen from './src/component/drawerList';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="travel"
    screenOptions={{
      headerShown: true
    }}>
      <Stack.Screen name="dashboard" options={{headerShown: false}} component={DrawerNavigator} />
      <Stack.Screen name="splash" options={{headerShown: false}} component={SplashScreen} />
      <Stack.Screen name="register" options={{headerShown: false}} component={RegisterScreen} />
      <Stack.Screen name="travel" options={{headerShown: false}} component={TravelScreen} />
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#DEDEDE',
      },
    }}
        drawerPosition="left"
        drawerType="front"
        drawerContent={props => <DrawerScreen {...props} />}
        >
      <Drawer.Screen name="Dashboard"
                     options={{
                      gestureEnabled: true,
                      headerShown: false
                    }} 
                     component={DashboardScreen}
                      />
    </Drawer.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
