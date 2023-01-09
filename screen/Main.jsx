import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomTitle } from '../components/Common/CustomText';

const Main = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <CustomTitle>Main</CustomTitle>
      <TouchableOpacity
        onPress={() => navigate('Stacks', { screen: 'Detail' })}
      >
        <Text>Detail 이동</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;
