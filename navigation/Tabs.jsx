import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screen/Main';
import MyPage from '../screen/MyPage';
import { Feather, Ionicons } from '@expo/vector-icons';
import useDarkMode from '../hooks/useDarkMode';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { theme } = useDarkMode();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.color?.background,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.color?.background,
        },
        tabBarLabelStyle: { color: theme.color?.mono100 },
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerTitleAlign: 'left',
          tabBarLabel: '메인',
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: (color, size) => {
            return (
              <Feather name="menu" size={24} color={theme.color?.mono100} />
            );
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
          tabBarIcon: (color, size) => {
            return (
              <Ionicons name="people" size={24} color={theme.color?.mono100} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
