import React from 'react';
import styled from '@emotion/native';
import ThereAreMainText from '../components/Common/ThereAreMainText';
import CustomInput from '../components/Common/CustomInput';
import { CustomH4 } from '../components/Common/CustomText';
import CustomButton from '../components/Common/CustomButton';
import { TouchableOpacity } from 'react-native';

const Login = ({ navigation: { navigate } }) => {
  return (
    <LoginContainer>
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
          <TouchableOpacity
            onPress={() => navigate('Stacks', { screen: 'SignUp' })}
          >
            <InputText>회원이 아니신가요?</InputText>
          </TouchableOpacity>
        </LoginBottomContainer>
      </InputContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin: 75px 0;
`;

const InputText = styled(CustomH4)`
  margin: 10px;
`;

const LoginBottomContainer = styled.View`
  align-items: center;
  margin-top: 24px;
`;

const LoginButton = styled.TouchableOpacity``;

export default Login;
