import styled from '@emotion/native';
import { CustomH4 } from './CustomText';
const CustomInput = ({ width = '250px', height = '50px' }) => {
  return <InputContainer width={width} height={height}></InputContainer>;
};

const InputContainer = styled.TextInput`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.mono80};
`;

export default CustomInput;
