import styled from '@emotion/native';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../components/Common/CustomButton';
import { CustomH1 } from '../components/Common/CustomText';
import useGetToBeList from '../hooks/useGetToBeList';

const Main = ({ navigation: { navigate } }) => {
  const { toBeList, userName, userUid } = useGetToBeList();

  return (
    <MainContainer>
      <ListedContainer>
        {toBeList?.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigate('Stacks', {
                screen: 'Detail',
                params: { id: item.id },
              });
            }}
          >
            <ListedText>나는 {item.toBeTitle}다.</ListedText>
          </TouchableOpacity>
        ))}
      </ListedContainer>
      <ButtonContainer
        onPress={() => {
          navigate('Stacks', {
            screen: 'AddDetail',
            params: { userUid: userUid },
          });
        }}
      >
        <CustomButton>추가하기</CustomButton>
      </ButtonContainer>
    </MainContainer>
  );
};

const MainContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListedContainer = styled.View`
  height: 500px;
  justify-content: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  width: 100px;
`;

const ListedText = styled(CustomH1)`
  text-align: center;
  line-height: 44px;
  margin: 7px;
`;

export default Main;
