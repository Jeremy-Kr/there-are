import styled from '@emotion/native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../components/Common/CustomButton';
import { CustomH1 } from '../components/Common/CustomText';
import { getAuth } from 'firebase/auth';

const Main = ({ navigation: { navigate } }) => {
  const auth = getAuth();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = auth?.currentUser;
    setUserName(user?.displayName);
  }, []);

  const handleAddPress = () => {
    navigate('Stacks', { screen: 'AddDetail' });
  };

  const handleDetailPress = () => {
    navigate('Stacks', {
      screen: 'Detail',
      params: { id: 'tVR0Gn3TaiUFkjdtba5c' },
    });
  };

  // tVR0Gn3TaiUFkjdtba5c

  return (
    <MainContainer>
      <ListedContainer>
        <TouchableOpacity onPress={handleDetailPress}>
          <ListedText>나 {userName}은 전쟁천재이다.</ListedText>
        </TouchableOpacity>
      </ListedContainer>
      <ButtonContainer onPress={handleAddPress}>
        <CustomButton>추가하기</CustomButton>
      </ButtonContainer>
    </MainContainer>
  );
};

const MainContainer = styled.SafeAreaView`
  justify-content: center;
`;

const ListedContainer = styled.View`
  align-items: center;
  margin-top: 250px;
`;

const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

const ListedText = styled(CustomH1)`
  line-height: 44px;
  margin: 7px;
`;

export default Main;
