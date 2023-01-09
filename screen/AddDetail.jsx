import styled from '@emotion/native';
import React from 'react';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomH1 } from '../components/Common/CustomText';

const AddDetail = () => {
  return (
    <AddDetailContainer>
      <AddDetailTitle>내가 원하는 미래</AddDetailTitle>
      <AddDetailUserName>나 이순신은</AddDetailUserName>
      <AddDetailInputContainer>
        <CustomInput />
        <AddDetailLast>다.</AddDetailLast>
      </AddDetailInputContainer>

      <AddDetailButtonContainer>
        <CustomButton>시작하기</CustomButton>
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
