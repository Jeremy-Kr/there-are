import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import Root from './navigation/Root';

import { darkTheme, lightTheme } from './styles/theme';
import useSplashScreen from './hooks/useSplashScreen';

const App = () => {
  const isDark = useColorScheme() === 'dark';
  const { appIsReady } = useSplashScreen();
  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
