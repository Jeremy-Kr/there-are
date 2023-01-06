import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import Root from './navigation/Root';

import { darkTheme, lightTheme } from './styles/theme';

const App = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
