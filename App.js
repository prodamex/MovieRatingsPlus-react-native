import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src';
import Login from './src/view/Login';
import index from './src/index';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
{/*  creation de deux screens login et index */}
      <Stack.Screen options={{ headerShown: false}} name="MovieRating" component={Login} />
      <Stack.Screen name="MovieRating++" component={index} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}