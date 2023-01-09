import styled from '@emotion/native';
const CustomInput = ({ width = '250px', height = '50px', placeholder }) => {
  return (
    <InputContainer width={width} height={height} placeholder={placeholder} />
  );
};

const InputContainer = styled.TextInput`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.mono80};
`;

export default CustomInput;
