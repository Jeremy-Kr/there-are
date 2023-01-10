import styled from '@emotion/native';
import React, { useEffect, useState } from 'react';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomH1 } from '../components/Common/CustomText';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { TouchableOpacity } from 'react-native';
import { getAuth } from 'firebase/auth';

const AddDetail = () => {
  const [tobetitle, setTobetitle] = useState('');
  const [userId, setUserId] = useState('');

  const auth = getAuth();

  useEffect(() => {
    const user = auth?.currentUser;
    setUserId(user?.email);
  }, []);

  const addTobelist = async () => {
    const newTobelist = {
      tobetitle,
      createdAt: Date.now(),
      userId,
    };
    await addDoc(collection(db, 'Tobelist'), newTobelist);
    setTobetitle('');
  };

  return (
    <AddDetailContainer>
      <AddDetailTitle>내가 원하는 미래</AddDetailTitle>
      <AddDetailUserName>나 이순신은</AddDetailUserName>
      <AddDetailInputContainer>
        <TouchableOpacity>
          <CustomInput onChangeText={setTobetitle} value={tobetitle} />
        </TouchableOpacity>
        <AddDetailLast>다.</AddDetailLast>
      </AddDetailInputContainer>
      <AddDetailButtonContainer>
        <TouchableOpacity onPress={() => addTobelist()}>
          <CustomButton>시작하기</CustomButton>
        </TouchableOpacity>
      </AddDetailButtonContainer>
    </AddDetailContainer>
  );
};

const AddDetailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

const AddDetailTitle = styled(CustomH1)`
  text-align: center;
`;

const AddDetailUserName = styled(CustomH1)`
  margin: 50px 0 10px 30px;
  text-align: left;
`;

const AddDetailInputContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const AddDetailLast = styled(CustomH1)`
  margin-left: 15px;
`;

const AddDetailButtonContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export default AddDetail;
