import styled from '@emotion/native';
import React, { useEffect } from 'react';
import { CustomSplashTitle } from '../components/Common/CustomText';

const Splash = ({ navigation: { navigate } }) => {
  const data = '필사즉생, 필생즉사';
  useEffect(() => {
    setTimeout(() => {
      navigate('Stacks', { index: 0, screen: ['Login'] });
    }, 2000);
  }, []);
  return (
    <SplashContainer>
      <CustomSplashTitle>{data}</CustomSplashTitle>
    </SplashContainer>
  );
};

const SplashContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.background};
`;

export default Splash;
