import styled from '@emotion/native';
import { ButtonText } from './CustomText';
import { View } from 'react-native';

const CustomButton = ({ width = '100px', height = '40px', children }) => {
  return (
    <ButtonContainer width={width} height={height}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.brand100};
`;

export default CustomButton;
