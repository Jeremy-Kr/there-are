import styled from '@emotion/native';
const CustomInput = ({
  width = '250px',
  height = '50px',
  fontSize = '16px',
  placeholder,
}) => {
  return (
    <InputContainer
      width={width}
      height={height}
      placeholder={placeholder}
      fontSize={fontSize}
    />
  );
};

const InputContainer = styled.TextInput`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.reverseMono80};
  color: ${(props) => props.theme.color.mono100};
  font-size: ${(props) => props.fontSize};
  padding: 0 10px;
`;

export default CustomInput;
