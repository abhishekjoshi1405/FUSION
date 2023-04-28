/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CarList from './components/CarList';
import CustomButton from './components/CustomButton';
import Input from './components/Input';
import Signup from './screens/Signup';
import FoodStart from './screens/Foods/FoodStart'
import FoodDashboard from './screens/Foods/FoodDashboard'
import FoodDetails from './screens/Foods/FoodDetails'

import FoodCart from './screens/Foods/FoodCart'

import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function FoodTabs() {
  return (
    <Tab.Navigator  >
      <Tab.Screen name="Dashboard" component={FoodDashboard} options={{headerShown:false}}  />
      <Tab.Screen name="Details" component={FoodDetails} options={{headerShown:false}}  />
      <Tab.Screen name="Cart" component={FoodCart} options={{headerShown:false}}  />
    </Tab.Navigator>
  );
}


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  //   <SafeAreaView >
  //     <View >
  //     <StatusBar
  //       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
  //       backgroundColor={backgroundStyle.backgroundColor}
  //     />

  //  {/* <CarList /> */}
  //  {/* <Signup /> */}
    
  //   </View>
  //   </SafeAreaView>
  <Provider store={store}>
  <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Signup}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={CarList} options={{headerShown:false}} />
        <Stack.Screen name="FoodStart" component={FoodStart} options={{headerShown:false}}    />
        <Stack.Screen name="FoodHome" component={FoodTabs} options={{headerShown:false}}    />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({




});

export default App;
