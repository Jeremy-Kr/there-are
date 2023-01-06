import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screen/Main';
import MyPage from '../screen/MyPage';
import { Feather, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerTitleAlign: 'left',
          tabBarLabel: '메인',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: { color: 'black' },
          tabBarIcon: (color, size) => {
            return <Feather name="menu" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerTitleAlign: 'left',
          tabBarLabel: '내정보',
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: { color: 'black' },
          tabBarIcon: (color, size) => {
            return <Ionicons name="people" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
