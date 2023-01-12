import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/native';
import ThereAreMainText from '../components/Common/ThereAreMainText';
import CustomInput from '../components/Common/CustomInput';
import { CustomH4 } from '../components/Common/CustomText';
import CustomButton from '../components/Common/CustomButton';
import { TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../firebase';
import { emailRegex, pwRegex } from '../utils/utils';

const Login = ({ navigation: { navigate } }) => {
  const emailRef = useRef(null);
  const pwRef = useRef(null);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const checkUser = setTimeout(() => {
    authService.currentUser && navigate('Stacks', { screen: 'Landing' });
  }, 500);

  useEffect(() => {
    checkUser;
  }, []);

  // 유효성 검사
  const validateInputs = () => {
    if (!email) {
      alert('email을 입력해주세요.');
      emailRef.current.focus();
      return true;
    }
    if (!pw) {
      alert('password를 입력해주세요.');
      pwRef.current.focus();
      return true;
    }
    const matchedEmail = email.match(emailRegex);
    const matchedPw = pw.match(pwRegex);

    if (matchedEmail === null) {
      alert('이메일 형식에 맞게 입력해 주세요.');
      emailRef.current.focus();
      return true;
    }
    if (matchedPw === null) {
      alert('비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.');
      pwRef.current.focus();
      return true;
    }
  };

  //로그인 함수
  const handleLogin = () => {
    // 유효성 검사 함수 실행
    if (validateInputs()) {
      return;
    }

    // 파이어베이스 로그인 요청
    signInWithEmailAndPassword(authService, email, pw)
      .then(() => {
        console.log('로그인성공');
        setEmail('');
        setPw('');
        // 로그인 성공시 임시로 Detail로 가도록 로직을 걸어놓았습니다.
        navigate('Stacks', { screen: 'Landing' });
      })
      .catch((err) => {
        console.log('err.message:', err.message);
        if (err.message.includes('user-not-found')) {
          alert('회원이 아닙니다. 회원가입을 먼저 진행해 주세요.');
        }
        if (err.message.includes('wrong-password')) {
          alert('비밀번호가 틀렸습니다.');
        }
      });
  };

  return (
    <LoginContainer>
      <ThereAreMainText />
      <InputContainer>
        <InputText>이메일</InputText>
        <CustomInput
          ref={emailRef}
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
          placeholder="Enter your email id"
        />
        <InputText>비밀번호</InputText>
        <CustomInput
          ref={pwRef}
          value={pw}
          onChangeText={(text) => setPw(text)}
          textContentType="password"
          returnKeyType="send"
          secureTextEntry={true}
          placeholder="Enter your password"
        />
        <LoginBottomContainer>
          <LoginButton onPress={handleLogin}>
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
