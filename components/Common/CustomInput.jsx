import { View } from 'react-native';
import styled from '@emotion/native';

const CustomInput = () => {
  return (
    <View>
      <InputContainer></InputContainer>
    </View>
  );
};

const InputContainer = styled.TextInput`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.mono80};
  font-size: ${(props) => props.theme.fontSize.h4};
`;

export default CustomInput;
