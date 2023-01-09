import React from 'react';
import styled from '@emotion/native';
import ThereAreMainText from '../components/Common/ThereAreMainText';
import CustomInput from '../components/Common/CustomInput';
import { CustomH4 } from '../components/Common/CustomText';
import CustomButton from '../components/Common/CustomButton';
import { TouchableOpacity } from 'react-native';

const SignUp = ({ navigation: { navigate } }) => {
  return (
    <SignUpContainer>
      <ThereAreMainText />
      <InputContainer>
        <InputText>이메일</InputText>
        <CustomInput />
        <InputText>비밀번호</InputText>
        <CustomInput />
        <InputText>이름</InputText>
        <CustomInput />
        <LoginBottomContainer>
          <JoinButtonContainer>
            <CustomButton>회원가입</CustomButton>
          </JoinButtonContainer>
          <TouchableOpacity
            onPress={() => navigate('Stacks', { screen: 'Login' })}
          >
            <InputText>이미 회원이신가요?</InputText>
          </TouchableOpacity>
        </LoginBottomContainer>
      </InputContainer>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin: 10px;
`;

const InputText = styled(CustomH4)`
  margin: 10px;
`;

const LoginBottomContainer = styled.View`
  align-items: center;
  margin: 30px;
`;

const JoinButtonContainer = styled.TouchableOpacity``;

export default SignUp;
