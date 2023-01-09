import React from 'react';
import { SafeAreaView } from 'react-native';
import { CustomH1, CustomH3 } from '../components/Common/CustomText';
import styled from '@emotion/native';

const MyPage = () => {
  return (
    <SafeAreaView>
      <MyPageTextContainer>
        <MyPageTopText>함께한지 D+347</MyPageTopText>
        <MyPageTopText>다짐한 횟수 347</MyPageTopText>
        <MyPageTopText>내가 그리는 미래 1</MyPageTopText>
      </MyPageTextContainer>
      <MyPageButtonContainer>
        <TouchableButton>
          <MyPageButtonText>닉네임 변경하기</MyPageButtonText>
        </TouchableButton>
        <TouchableButton>
          <MyPageButtonText>로그아웃</MyPageButtonText>
        </TouchableButton>
        <TouchableButton>
          <MyPageButtonText>회원탈퇴하기</MyPageButtonText>
        </TouchableButton>
      </MyPageButtonContainer>
    </SafeAreaView>
  );
};

export default MyPage;

const MyPageTextContainer = styled.View`
  height: 50%;
  margin-top: 40px;
  margin-bottom: 150px;
  justify-content: center;
  align-items: center;
`;

const MyPageTopText = styled(CustomH1)`
  padding-top: 10px;
`;

const MyPageButtonContainer = styled.View`
  align-items: center;
  text-align: center;
`;

const TouchableButton = styled.TouchableOpacity``;

const MyPageButtonText = styled(CustomH3)`
  margin-top: 10px;
`;
