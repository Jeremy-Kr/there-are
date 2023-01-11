import styled from '@emotion/native';
import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomH1 } from '../components/Common/CustomText';
import { authService } from '../firebase';

const EditNickName = ({ navigation: { goBack, reset } }) => {
  const [userNickName, setUserNickName] = useState();
  const handleChangePress = () => {
    updateProfile(authService.currentUser, { displayName: userNickName });
    reset({
      index: 0,
      routes: [
        {
          name: 'Tabs',
          params: { screen: 'MyPage' },
        },
      ],
    });
  };
  return (
    <EditNickNameContainer>
      <BackButtonContainer onPress={goBack}>
        <CustomButton fontSize="14px" width="80px" height="34px">
          뒤로가기
        </CustomButton>
      </BackButtonContainer>
      <CustomH1>{authService.currentUser.displayName}님</CustomH1>
      <CustomH1>새로운 이름을 알려주세요.</CustomH1>

      <NickNameInputContainer>
        <CustomInput
          onChangeText={setUserNickName}
          value={userNickName}
          width={320}
          placeholder="이름을 입력 해 주세요."
        />
      </NickNameInputContainer>
      <TouchableOpacity onPress={handleChangePress}>
        <CustomButton>변경하기</CustomButton>
      </TouchableOpacity>
    </EditNickNameContainer>
  );
};

const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 80px;
  left: 20px;
`;

const EditNickNameContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NickNameInputContainer = styled.View`
  margin: 30px 0;
`;

export default EditNickName;
