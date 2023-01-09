import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomTitle } from '../components/Common/CustomText';

const Main = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <CustomTitle>Main</CustomTitle>
      <CustomButton>가나다아</CustomButton>
      <CustomInput />

      <TouchableOpacity
        onPress={() => navigate('Stacks', { screen: 'Detail' })}
      >
        <Text>Detail 이동</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;
