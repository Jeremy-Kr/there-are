import styled from '@emotion/native';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomH1 } from '../components/Common/CustomText';
import { TouchableOpacity } from 'react-native';
import useAddDetail from '../hooks/useAddDetail';
import { authService } from '../firebase';

const AddDetail = ({
  navigation: { goBack },
  route: {
    params: { userUid },
  },
}) => {
  const { handleAddClick, toBeTitle, setToBeTitle } = useAddDetail(userUid);

  return (
    <AddDetailContainer>
      <BackButtonContainer onPress={goBack}>
        <CustomButton fontSize="14px" width="80px" height="34px">
          뒤로가기
        </CustomButton>
      </BackButtonContainer>
      <AddDetailTitle>내가 원하는 미래</AddDetailTitle>
      <AddDetailUserName>나는</AddDetailUserName>
      <AddDetailInputContainer>
        <CustomInput
          maxLength={5}
          onChangeText={setToBeTitle}
          value={toBeTitle}
          placeholder="최대 5글자"
        />
        <AddDetailLast>다.</AddDetailLast>
      </AddDetailInputContainer>
      <AddDetailButtonContainer>
        <TouchableOpacity onPress={() => handleAddClick()}>
          <CustomButton>시작하기</CustomButton>
        </TouchableOpacity>
      </AddDetailButtonContainer>
    </AddDetailContainer>
  );
};

const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 80px;
  left: 20px;
`;

const AddDetailContainer = styled.View`
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
