import { useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '../styles/theme';

const useDarkMode = () => {
  const isDark = useColorScheme() === 'dark';
  const [theme, setTheme] = useState({});

  const getTheme = () => {
    if (isDark) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  };

  useFocusEffect(() => {
    setTheme(getTheme());
  });

  return { isDark, theme };
};

export default useDarkMode;
