import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screen/Main';
import MyPage from '../screen/MyPage';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default Tabs;
