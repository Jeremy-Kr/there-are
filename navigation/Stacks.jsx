import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Landing from '../screen/Landing';
import AddToBe from '../screen/AddToBe';
import Detail from '../screen/Detail';
import AddDetail from '../screen/AddDetail';
import EditNickName from '../screen/EditNickName';
import useDarkMode from '../hooks/useDarkMode';

const Stack = createNativeStackNavigator();

const Stacks = ({ navigation: { goBack } }) => {
  const { theme } = useDarkMode();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.color?.background },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="AddToBe" component={AddToBe} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="AddDetail" component={AddDetail} />
      <Stack.Screen name="EditNickName" component={EditNickName} />
    </Stack.Navigator>
  );
};

export default Stacks;
