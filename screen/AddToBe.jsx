import styled from '@emotion/native';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomH1 } from '../components/Common/CustomText';
import { authService, db } from '../firebase';

const AddToBe = ({
  navigation: { navigate, goBack },
  route: {
    params: { toBeDetail },
  },
}) => {
  const [correctText, setCorrectText] = useState('');
  const [typingText, setTypingText] = useState('');
  const typingRef = useRef();

  const toBeRef = doc(db, 'to-be-list', toBeDetail.id);

  const updateToBeDate = async () => {
    try {
      const newWrittenDate = toBeDetail.writtenDate ?? [];
      newWrittenDate.push(Date.now());
      await updateDoc(toBeRef,
      {
        writtenDate: newWrittenDate,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeClick = () => {
    if (typingText === correctText) {
      alert('오늘도 꿈에 가까워지기 성공!');
      updateToBeDate();
      // firebase에 오늘 날짜를 저장하는 함수를 추가해야 합니다.
      navigate('Stacks', {
        screen: 'Detail',
        params: { id: toBeDetail.id },
      });
    }
    if (typingText !== correctText) {
      alert('문장을 똑같이 입력해주세요!');
      typingRef.current.focus();
    }
  };

  useEffect(() => {
    setCorrectText(`나는 ${toBeDetail.toBeTitle}다.`);
  }, []);

  return (
    <AddToBeContainer>
      <BackButtonContainer onPress={goBack}>
        <CustomButton fontSize="14px" width="80px" height="34px">
          뒤로가기
        </CustomButton>
      </BackButtonContainer>
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
        <CustomButton>추가하기</CustomButton>
      </TouchableOpacity>
    </AddToBeContainer>
  );
};

const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 80px;
  left: 30px;
`;

const AddToBeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AddToBeInputContainer = styled.View`
  margin: 30px 0;
`;

export default AddToBe;
