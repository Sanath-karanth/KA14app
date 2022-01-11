import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './src/screens/splashScreen';
import RegisterScreen from './src/screens/registerScreen';
import DashboardScreen from './src/screens/dashboardScreen';
import TravelScreen from './src/screens/travelScreen';
import FoodScreen from './src/screens/foodScreen';
import ShoppingScreen from './src/screens/shoppingScreen';
import HealthcareScreen from './src/screens/healthcareScreen';
import ProfileScreen from './src/screens/profileScreen';
import FeedbackScreen from './src/screens/feedbackScreen';
import TraveldescriptionScreen from './src/screens/traveldescriptionScreen';

import DrawerScreen from './src/component/drawerList';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="dashboard"
    screenOptions={{
      headerShown: true
    }}>
      <Stack.Screen name="dashboard" options={{headerShown: false}} component={DrawerNavigator} />
      <Stack.Screen name="splash" options={{headerShown: false}} component={SplashScreen} />
      <Stack.Screen name="register" options={{headerShown: false}} component={RegisterScreen} />
      <Stack.Screen name="travel" options={{headerShown: false}} component={TravelScreen} />
      <Stack.Screen name="food" options={{headerShown: false}} component={FoodScreen} />
      <Stack.Screen name="shop" options={{headerShown: false}} component={ShoppingScreen} />
      <Stack.Screen name="health" options={{headerShown: false}} component={HealthcareScreen} />
      <Stack.Screen name="profile" options={{headerShown: false}} component={ProfileScreen} />
      <Stack.Screen name="feedback" options={{headerShown: false}} component={FeedbackScreen} />
      <Stack.Screen name="traveldesp" options={{headerShown: false}} component={TraveldescriptionScreen} />
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
