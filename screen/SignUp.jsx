import React, { useState } from 'react';
import styled from '@emotion/native';
import ThereAreMainText from '../components/Common/ThereAreMainText';
import CustomInput from '../components/Common/CustomInput';
import { CustomH4 } from '../components/Common/CustomText';
import CustomButton from '../components/Common/CustomButton';
import { TouchableOpacity } from 'react-native';
//-------------------------------------------------------------------
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../firebase';
import { emailRegex, pwRegex } from '../utils/utils';

const SignUp = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const validateInputs = () => {
    if (!email) {
      console.log('이메일 입력해주세여');
      return true;
    }
    if (!pw) {
      console.log('패스워드 입력해주세여');

      return true;
    }
    const matchedEmail = email.match(emailRegex);
    const matchedPw = pw.match(pwRegex);

    if (matchedEmail === null) {
      console.log('이메일 형식 맞게 입력해주세여');

      return true;
    }
    if (matchedPw === null) {
      console.log('비밀번호는 여덟자 이상이어야되여 ');

      pwRef.current.focus();
      return true;
    }
  };
  const handleRegister = () => {
    // 유효성 검사
    if (validateInputs()) {
      return;
    }

    // 회원가입 요청
    createUserWithEmailAndPassword(authService, email, pw)
      .then(() => {
        console.log('로그인성공');
        setEmail('');
        setPw('');
      })
      .catch((err) => {
        console.log('err.message:', err.message);
        if (err.message.includes('already-in-use')) {
          console.log('이미 사용중인 아이디라능!!');
        }
      });
  };
  return (
    <SignUpContainer>
      <ThereAreMainText />
      <InputContainer>
        <InputText>이메일</InputText>
        <CustomInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
          placeholder="Enter your email id"
        />
        <InputText>비밀번호</InputText>
        <CustomInput
          value={pw}
          onChangeText={(text) => setPw(text)}
          textContentType="password"
          returnKeyType="send"
          secureTextEntry={true}
          placeholder="Enter your password"
        />
        <InputText>이름</InputText>
        <CustomInput />
        <LoginBottomContainer>
          <JoinButtonContainer onPress={handleRegister}>
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
