import styled from '@emotion/native';
import React, { useState } from 'react';
import { CustomSplashTitle } from '../components/Common/CustomText';
import { useQuery } from 'react-query';
import { getFamousSaying } from '../api';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Splash = ({ navigation: { reset } }) => {
  const [saying, setSaying] = useState('');

  useFocusEffect(() => {
    setTimeout(() => {
      reset({ routes: [{ name: 'Stacks', params: { screen: 'Login' } }] });
    }, 3000);
  });

  // useMemo ?? 어떤 값을 가져오기 위한거(특정 데이터 저장하려고)
  // useEffect ?? 어떤 함수, 로직을 실행할때
  // useCallback ?? 함수 내부에서 리턴하는 값을 저장하려고

  const { data, isLoading } = useQuery(['getFamousSaying'], getFamousSaying, {
    onSuccess: (data) => {
      setSaying(data[1]?.['respond']);
    },
    onError: (e) => {
      console.log(e.message);
    },
  });

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <SplashContainer>
      <CustomSplashTitle>{saying}</CustomSplashTitle>
    </SplashContainer>
  );
};

const SplashContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.background};
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Splash;
