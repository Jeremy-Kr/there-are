import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomTitle } from '../components/Common/CustomText';

const Main = () => {
  return (
    <SafeAreaView>
      <CustomTitle>Main</CustomTitle>
      <CustomButton />
      <CustomInput />
    </SafeAreaView>
  );
};

export default Main;
