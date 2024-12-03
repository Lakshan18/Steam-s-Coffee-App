import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import Login from './pages/Login';
import WelcomeTo from './pages/WelcomeTo';

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [Loaded, error] = useFonts({
    'Delius': require('./assets/fonts/Delius-Regular.ttf'),
    'OSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Sahitya': require('./assets/fonts/Sahitya-Regular.ttf'),
  });

  useEffect(() => {
    if (Loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [Loaded, error]);

  if (!Loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen name='Loading' component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name='WelcomeTo' component={WelcomeTo} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
