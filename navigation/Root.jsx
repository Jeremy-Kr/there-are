import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/Splash';
import Stacks from './Stacks';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ animation: 'fade' }}
      />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Stacks" component={Stacks} />
    </Stack.Navigator>
  );
};

export default Root;
