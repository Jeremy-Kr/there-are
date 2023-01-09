import styled from '@emotion/native';
import { CustomH3 } from './CustomText';

const CustomButton = ({ width = '100px', height = '40px' }) => {
  return (
    <ButtonContainer width={width} height={height}>
      <CustomH3>추가하기</CustomH3>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.brand100};
`;

export default CustomButton;
