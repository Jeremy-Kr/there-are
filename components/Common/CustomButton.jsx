import styled from '@emotion/native';
import { ButtonText } from './CustomText';

const CustomButton = ({
  width = '100px',
  height = '40px',
  fontSize = '20px',
  children,
  disable,
}) => {
  return (
    <ButtonContainer width={width} height={height} disable={disable}>
      <ButtonText fontSize={fontSize}>{children}</ButtonText>
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
  ${(props) => props.disable && 'opacity: 0.5;'}
`;

export default CustomButton;
