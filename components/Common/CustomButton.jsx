import { View } from 'react-native';
import styled from '@emotion/native';

const CustomButton = () => {
  return (
    <View>
      <ButtonContainer>
        <ButtonText>추가하기</ButtonText>
      </ButtonContainer>
    </View>
  );
};
const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.brand100};
`;

const ButtonText = styled.Text`
  position: absolute;
  width: 74px;
  height: 27px;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: ${(props) => props.theme.color.mono100};
  font-size: ${(props) => props.theme.fontSize.h3};
`;

export default CustomButton;
