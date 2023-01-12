import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { CustomH1, CustomH3 } from '../components/Common/CustomText';
import styled from '@emotion/native';
import { deleteUser, getAuth, signOut } from 'firebase/auth';
import useGetToBeList from '../hooks/useGetToBeList';
import { useFocusEffect } from '@react-navigation/native';
import { authService } from '../firebase';

const MyPage = ({ navigation: { navigate, reset, isFocused } }) => {
  const isFocus = isFocused();
  const auth = getAuth();

  const { toBeLength } = useGetToBeList();
  const [user, setUser] = useState({});
  const [userDisplayName, setUserDisplayName] = useState('');
  const [userCreatedDay, setUserCreatedDay] = useState();

  const getUserCreatedDay = async () => {
    const userCreatedAt = await JSON.parse(JSON.stringify(user)).createdAt;
    const newUserCreatedAt = new Date(+userCreatedAt);
    const nowDate = new Date();
    const distance = +nowDate.getTime() - newUserCreatedAt.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    setUserCreatedDay(+day + 1);
  };
  useFocusEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
      setUserDisplayName(auth.currentUser.displayName);

      getUserCreatedDay();
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setUserDisplayName(authService.currentUser.displayName);
    }, 500);
  }, [isFocus]);

  const handleLogOutPress = () => {
    // 컨펌 !!!!
    signOut(authService)
      .then(alert('로그아웃 하셨습니다.'))
      .then(
        reset({
          routes: [
            {
              name: 'Stacks',
              params: { screen: 'Login' },
            },
          ],
        })
      )
      .catch((e) => console.log(e));
  };

  const handleDeleteUser = () => {
    // 컨펌 !!!!
    deleteUser(authService.currentUser)
      .then(alert('회원탈퇴가 완료되었습니다.'))
      .then(
        reset({
          routes: [
            {
              name: 'Stacks',
              params: { screen: 'Login' },
            },
          ],
        })
      )
      .catch((e) => console.log(e));
  };

  return (
    <SafeAreaView>
      <MyPageTextContainer>
        <MyPageTopText>{userDisplayName}</MyPageTopText>
        <MyPageTopText>함께한지 D+{userCreatedDay}</MyPageTopText>
        <MyPageTopText>내가 바꿀 미래 {toBeLength}</MyPageTopText>
      </MyPageTextContainer>
      <MyPageButtonContainer>
        <TouchableButton
          onPress={() => {
            navigate('Stacks', {
              screen: 'EditNickName',
            });
          }}
        >
          <MyPageButtonText>닉네임 변경하기</MyPageButtonText>
        </TouchableButton>
        <TouchableButton
          onPress={() => {
            handleLogOutPress();
          }}
        >
          <MyPageButtonText>로그아웃</MyPageButtonText>
        </TouchableButton>
        <TouchableButton
          onPress={() => {
            handleDeleteUser();
          }}
        >
          <MyPageButtonText>회원탈퇴하기</MyPageButtonText>
        </TouchableButton>
      </MyPageButtonContainer>
    </SafeAreaView>
  );
};

export default MyPage;

const MyPageTextContainer = styled.View`
  height: 50%;
  margin-top: 40px;
  margin-bottom: 150px;
  justify-content: center;
  align-items: center;
`;

const MyPageTopText = styled(CustomH1)`
  padding-top: 10px;
`;

const MyPageButtonContainer = styled.View`
  align-items: center;
  text-align: center;
`;

const TouchableButton = styled.TouchableOpacity``;

const MyPageButtonText = styled(CustomH3)`
  margin-top: 10px;
`;
