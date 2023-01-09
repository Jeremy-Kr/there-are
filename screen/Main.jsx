import styled from '@emotion/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import CustomButton from '../components/Common/CustomButton';

import { CustomH1 } from '../components/Common/CustomText';

const Main = ({ navigation: { navigate } }) => {
  return (
    <MainContainer>
      <ListedContainer>
        <ListedText>나 이순신은 전쟁천재이다.</ListedText>
        <ListedText>나 이순신은 기록 장인이다.</ListedText>
        <ListedText>나 이순신은 애국자다.</ListedText>
      </ListedContainer>
      <ButtonContainer>
        <CustomButton>추가하기</CustomButton>
      </ButtonContainer>
    </MainContainer>
  );
};

const MainContainer = styled.SafeAreaView`
  justify-content: center;
`;

const ListedContainer = styled.View`
  align-items: center;
  margin-top: 250px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

const ListedText = styled(CustomH1)`
  line-height: 44px;
  margin: 7px;
`;

export default Main;
