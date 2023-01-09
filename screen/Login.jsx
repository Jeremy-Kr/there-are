import React, { useState } from 'react';
import styled from '@emotion/native';
import ThereAreMainText from '../components/Common/ThereAreMainText';
import CustomInput from '../components/Common/CustomInput';
import { CustomH4 } from '../components/Common/CustomText';
import CustomButton from '../components/Common/CustomButton';
import { TouchableOpacity } from 'react-native';
//---------------------------------------------
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../firebase';
import { emailRegex, pwRegex } from '../utils/utils';
//---------------------------------------------

const Login = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  //유효성 검사 함수
  const validateInputs = () => {
    if (!email) {
      console.log('이멜 입력하라능');
      return true;
    }
    if (!pw) {
      console.log('패스워드 입력하라능');
      return true;
    }
    const matchedEmail = email.match(emailRegex);
    const matchedPw = pw.match(pwRegex);

    if (matchedEmail === null) {
      console.log('이멜 형식 맞게 입력하라능');
      return true;
    }
    if (matchedPw === null) {
      console.log('패스워드 형식 맞게 입력하라능');
      return true;
    }
  };

  //로그인 기능 함수
  const handleLogin = () => {
    console.log('이거 왜 실행안되냐');
    // 유효성 검사함수 실행시키기
    if (validateInputs()) {
      return;
    }

    // 로그인 요청
    signInWithEmailAndPassword(authService, email, pw)
      .then(() => {
        console.log('로그인성공');
        setEmail('');
        setPw('');
      })
      .catch((err) => {
        console.log('err.message:', err.message);
        if (err.message.includes('user-not-found')) {
          console.log('회원이 아닙니다 회원가입 진행해주세여');
        }
        if (err.message.includes('wrong-password')) {
          console.log('비밀번호 틀렸슴둥');
        }
      });
  };

  return (
    <LoginContainer>
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
        <LoginBottomContainer>
          <LoginButton
            onPress={() => {
              handleLogin();
            }}
          >
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
