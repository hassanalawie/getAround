import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import NavigationPage from './pages/NavigationPage';
import SelectBuilding from './pages/SelectBuilding';
import Tutorial1 from './pages/Tutorial1';
import Tutorial2 from './pages/Tutorial2';
import Tutorial3 from './pages/Tutorial3';
import Tutorial4 from './pages/Tutorial4';
import Tutorial5 from './pages/Tutorial5';
import { RootStackParamList } from './RootStackParamList';




const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tutorial1" component={Tutorial1} />
        <Stack.Screen name="Tutorial2" component={Tutorial2} />
        <Stack.Screen name="Tutorial3" component={Tutorial3} />
        <Stack.Screen name="Tutorial4" component={Tutorial4} />
        <Stack.Screen name="Tutorial5" component={Tutorial5} />
        <Stack.Screen name="SelectBuilding" component={SelectBuilding} />
        <Stack.Screen name="NavigationPage" component={NavigationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}