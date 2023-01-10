import styled from '@emotion/native';
import React from 'react';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomH1 } from '../components/Common/CustomText';

const AddToBe = () => {
  return (
    <AddToBeContainer>
      <CustomH1>나 이순신은 전쟁천재다.</CustomH1>
      <AddToBeInputContainer>
        <CustomInput width={320} placeholder="나 이순신은 전쟁천재다." />
      </AddToBeInputContainer>
      <CustomButton>변경하기</CustomButton>
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
