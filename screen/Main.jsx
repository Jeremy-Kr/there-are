import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import CustomButton from '../components/Common/CustomButton';
import CustomInput from '../components/Common/CustomInput';
import { CustomTitle } from '../components/Common/CustomText';

const Main = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <CustomTitle>Main</CustomTitle>
    </SafeAreaView>
  );
};

export default Main;
