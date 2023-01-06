import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { CustomH1, CustomH3 } from '../components/Common/CustomText';
import styled from '@emotion/native';

const MyPage = () => {
  return (
    <SafeAreaView>
      <MyPageKingView>
        <Text>MyPage</Text>
        <MyPageTopView>
          <MypageTopTextView>
            <MypageTopText>함께한지 D+347</MypageTopText>
            <MypageTopText>다짐한 횟수 347</MypageTopText>
            <MypageTopText>내가 그리는 미래 1</MypageTopText>
          </MypageTopTextView>
        </MyPageTopView>
        <MyPageButtonView>
          <MyPageButtonMidView>
            <MyPageButtonSmallView>
              <TouchableButton>
                <MyPageButtonText>닉네임 변경하기</MyPageButtonText>
              </TouchableButton>
              <TouchableButton>
                <MyPageButtonText>로그아웃</MyPageButtonText>
              </TouchableButton>
              <TouchableButton>
                <MyPageButtonText>회원탈퇴하기</MyPageButtonText>
              </TouchableButton>
            </MyPageButtonSmallView>
          </MyPageButtonMidView>
        </MyPageButtonView>
      </MyPageKingView>
    </SafeAreaView>
  );
};

export default MyPage;

const MyPageKingView = styled.View``;

const MyPageTopView = styled.View`
  height: 45%;
`;

const MypageTopTextView = styled.View`
  margin: 0 auto;
  margin-top: 40px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const MypageTopText = styled(CustomH1)`
  padding-top: 10px;
`;
const MyPageButtonView = styled.View``;

const MyPageButtonMidView = styled.View`
  flex-direction: row;
  align-items: flex-end;
  height: 60%;
`;

const MyPageButtonSmallView = styled.View`
  padding: 40px;
  margin: 0 auto;
  flex: 1;
  align-items: center;
  text-align: center;
`;

const TouchableButton = styled.TouchableOpacity``;

const MyPageButtonText = styled(CustomH3)`
  margin-top: 10px;
`;
