import React from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import ColorBox from './components/ColorBox';
import Food from './components/Food';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPallete from './screens/ColorPallete';
// import ColorPallete from './screens/ColorPallete';

const Stack = createStackNavigator();

// console.disableYellowBox = true;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigatior>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPallete" component={ColorPallete} />
      </Stack.Navigatior>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({});
