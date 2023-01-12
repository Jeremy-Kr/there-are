import styled from '@emotion/native';
import { updateProfile } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomH1 } from '../components/Common/CustomText';
import { authService } from '../firebase';

const EditNickName = ({ navigation: { goBack, reset } }) => {
  const [userNickName, setUserNickName] = useState();
  const changeNickNameRef = useRef(null);
  const handleChangePress = () => {
    if (userNickName.length > 5) {
      alert('글자수는 최대 5글자입니다!');
      changeNickNameRef.current.focus();
      setUserNickName('');
      return true;
    }
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
          ref={changeNickNameRef}
          onChangeText={setUserNickName}
          value={userNickName}
          width={320}
          placeholder="최대 5글자 입력가능합니다."
          maxLength={5}
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
