import styled from '@emotion/native';

const CustomInput = styled.TextInput`
  width: ${(props) => props.width ?? '250px'};
  height: ${(props) => props.height ?? '50px'};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.reverseMono80};
  color: ${(props) => props.theme.color.mono100};
  font-size: ${(props) => props.fontSize ?? '16px'};
  padding: 0 10px;
`;

export default CustomInput;
