import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { authService } from '../firebase';

const useResetNavigate = (navName, screen) => {
  const navigation = useNavigation();

  const resetNavigate = setTimeout(() => {
    navigation.reset({
      routes: [
        {
          name: navName,
          params: { screen: screen },
        },
      ],
    });
  }, 3000);

  useEffect(() => {
    resetNavigate;
  }, []);

  useEffect(() => {
    return clearTimeout(resetNavigate);
  }, []);

  return;
};

export default useResetNavigate;
