import React from 'react';
import { Alert, SafeAreaView } from 'react-native';

import { CustomH1, CustomH3 } from '../components/Common/CustomText';
import styled from '@emotion/native';
import { deleteUser, signOut } from 'firebase/auth';
import { authService } from '../firebase';
import useCountDDay from '../hooks/useCountDDay';

const MyPage = ({ navigation: { navigate, reset } }) => {
  const { toBeLength, userCreatedDay } = useCountDDay();


  useEffect(() => {
    setTimeout(() => {
      setUserDisplayName(authService.currentUser.displayName);
    }, 500);
  }, [isFocus]);

  const handleLogOutPress = () => {
    Alert.alert(
      '로그아웃',
      '벌써 나가시려구요? 😥',
      [
        { text: '취소', onPress: () => {}, style: 'cancel' },
        {
          text: '로그아웃',
          onPress: () => {
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
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      }
    );
  };

  const handleDeleteUser = () => {
    Alert.alert(
      '회원탈퇴',
      '😱 정말로 회원탈퇴하시겠습니까? 😱',
      [
        { text: '취소', onPress: () => {}, style: 'cancel' },
        {
          text: '탈퇴하기',
          onPress: () => {
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
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      }
    );
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
