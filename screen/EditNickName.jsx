import styled from '@emotion/native';
import React from 'react';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomH1 } from '../components/Common/CustomText';

const EditNickName = () => {
  return (
    <EditNickNameContainer>
      <CustomH1>새로운 이름을 알려주세요.</CustomH1>
      <NickNameInputContainer>
        <CustomInput width={320} placeholder="이름을 입력 해 주세요." />
      </NickNameInputContainer>
      <CustomButton>변경하기</CustomButton>
    </EditNickNameContainer>
  );
};

const EditNickNameContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NickNameInputContainer = styled.View`
  margin: 30px 0;
`;

export default EditNickName;
