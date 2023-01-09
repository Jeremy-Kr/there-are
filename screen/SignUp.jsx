import React from 'react';
import styled from '@emotion/native';
import ThereAreMainText from '../components/ThereAre/ThereAreMainText';
import CustomInput from '../components/Common/CustomInput';
import { CustomH4 } from '../components/Common/CustomText';
import CustomButton from '../components/Common/CustomButton';
const SignUp = () => {
  return (
    <SignUpContainer>
      <ThereAreMainText />
      <InputContainer>
        <InputText>이메일</InputText>
        <CustomInput />
        <InputText>비밀번호</InputText>
        <CustomInput />
        <LoginBottomContainer>
          <LoginButton>
            <CustomButton>로그인</CustomButton>
          </LoginButton>
          <InputText>회원이 아니신가요?</InputText>
        </LoginBottomContainer>
      </InputContainer>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin: 75px;
  height: 300px;
`;

const InputText = styled(CustomH4)`
  margin: 10px;
`;

const LoginBottomContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const LoginButton = styled.TouchableOpacity``;
