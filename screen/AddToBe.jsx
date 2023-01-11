import styled from '@emotion/native';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomH1 } from '../components/Common/CustomText';
import { authService } from '../firebase';

const AddToBe = ({
  route: {
    params: { toBeDetail },
  },
}) => {
  const [correctText, setCorrectText] = useState('');
  const [typingText, setTypingText] = useState('');
  const typingRef = useRef();

  const handleChangeClick = () => {
    if (typingText === correctText) {
      alert('오늘도 꿈에 가까워지기 성공!');
      // firebase에 오늘 날짜를 저장하는 함수를 추가해야 합니다.
    }
    if (typingText !== correctText) {
      alert('문장을 똑같이 입력해주세요!');
      typingRef.current.focus();
    }
  };

  useEffect(() => {
    setCorrectText(
      `나 ${authService.currentUser.displayName}는 ${toBeDetail.tobetitle}이다.`
    );
  }, []);

  return (
    <AddToBeContainer>
      <CustomH1>
        <TextInput>{correctText}</TextInput>
      </CustomH1>

      <AddToBeInputContainer>
        <CustomInput
          width={320}
          placeholder={correctText}
          ref={typingRef}
          value={typingText}
          onChangeText={setTypingText}
        />
      </AddToBeInputContainer>
      <TouchableOpacity onPress={handleChangeClick}>
        <CustomButton>변경하기</CustomButton>
      </TouchableOpacity>
    </AddToBeContainer>
  );
};

const AddToBeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AddToBeInputContainer = styled.View`
  margin: 30px 0;
`;

export default AddToBe;
