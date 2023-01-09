import styled from '@emotion/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import CustomButton from '../components/Common/CustomButton';

import { CustomH1 } from '../components/Common/CustomText';

const Main = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <MainContainer>
        <ListedContainer>
          <ListedText1>나 이순신은 전쟁천재이다.</ListedText1>
          <ListedText2>나 이순신은 기록 장인이다.</ListedText2>
          <ListedText3>나 이순신은 애국자다.</ListedText3>
        </ListedContainer>
      </MainContainer>
      <ButtonContainer>
        <CustomButton>추가하기</CustomButton>
      </ButtonContainer>
    </SafeAreaView>
  );
};

const MainContainer = styled.View`
  height: 700px;
  justify-content: center;
`;

const ListedContainer = styled.View`
  align-items: center;
`;

const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 74px;
  height: 27px;
  left: 160px;
  top: 676px;
`;

const ListedText1 = styled(CustomH1)`
  line-height: 44px;
  margin: 7px;
`;
const ListedText2 = styled(CustomH1)`
  line-height: 44px;
  margin: 7px;
`;
const ListedText3 = styled(CustomH1)`
  line-height: 44px;
  margin: 7px;
`;

export default Main;
