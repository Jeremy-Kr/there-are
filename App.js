import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import Root from './navigation/Root';

import { darkTheme, lightTheme } from './styles/theme';
import useSplashScreen from './hooks/useSplashScreen';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const isDark = useColorScheme() === 'dark';
  const { appIsReady } = useSplashScreen();
  const queryClient = new QueryClient();

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
