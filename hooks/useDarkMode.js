import { useColorScheme } from 'react-native';

const useDarkMode = () => {
  const isDark = useColorScheme() === 'dark';

  return { isDark };
};
