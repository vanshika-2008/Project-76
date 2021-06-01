import HomeScreen from './screens/home';
import ISSLocationScreen from './screens/issLocation';
import MeteorsScreen from './screens/meteors';
import UpdatesScreen from './screens/updates';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SpaceCraftScreen from './screens/SpaceCraft';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions = {{
        headerShown : false
      }}>
        <Stack.Screen name = 'Home' component = {HomeScreen} />
        <Stack.Screen name = 'Space Crafts' component = {SpaceCraftScreen} />
        <Stack.Screen name = 'Star Map' component = {StarMapScreen} />
        <Stack.Screen name = 'Daily Pictures' component = {DailyPicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
