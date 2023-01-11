import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const useResetNavigate = (screen) => {
  const navigation = useNavigation();

  const resetNavigate = setTimeout(() => {
    navigation.reset({
      routes: [{ name: 'Stacks', params: { screen: screen } }],
    });
  }, 3000);

  useEffect(() => {
    return clearTimeout(resetNavigate);
  }, []);

  return { resetNavigate };
};

export default useResetNavigate;
