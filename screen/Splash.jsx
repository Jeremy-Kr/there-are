import styled from '@emotion/native';
import React, { useState, useCallback } from 'react';
import { CustomSplashTitle } from '../components/Common/CustomText';
import { useQuery } from 'react-query';
import { getFamousSaying } from '../api';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Splash = ({ navigation: { reset } }) => {
  const [saying, setSaying] = useState('');

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = setTimeout(() => {
        reset({ routes: [{ name: 'Stacks', params: { screen: 'Login' } }] });
      }, 3000);
    }, [])
  );

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
