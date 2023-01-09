import { useState, useRef } from 'react';
import styled from '@emotion/native';
import ThereAreMainText from '../components/Common/ThereAreMainText';
import CustomInput from '../components/Common/CustomInput';
import { CustomH4 } from '../components/Common/CustomText';
import CustomButton from '../components/Common/CustomButton';
import { TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authService } from '../firebase';
import { emailRegex, pwRegex } from '../utils/utils';

const SignUp = ({ navigation: { navigate } }) => {
  const emailRef = useRef(null);
  const pwRef = useRef(null);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [userNickName, setUserNickName] = useState('');

  //유효성 검사
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

  //회원가입 함수
  const handleRegister = () => {
    // 유효성 검사
    if (validateInputs()) {
      return;
    }

    // 파이어베이스 회원가입 요청
    createUserWithEmailAndPassword(authService, email, pw)
      .then(() => {
        //회원가입 후 currentUser에 userNickName을 추가로 update하는 부분입니다.
        updateProfile(authService.currentUser, { displayName: userNickName });
        setEmail('');
        setPw('');
        // authService.currentUser가 존재하면 Detail페이지로 이동하도록 임시 로직을 걸어놓았습니다.
        if (authService.currentUser) {
          navigate('Stacks', { screen: 'Detail' });
        }
      })
      .catch((err) => {
        console.log('err.message:', err.message);
        if (err.message.includes('already-in-use')) {
          alert('이미 사용중인 아이디입니다.');
        }
      });
  };
  return (
    <SignUpContainer>
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
        <InputText>이름</InputText>
        <CustomInput onChangeText={setUserNickName} value={userNickName} />
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
