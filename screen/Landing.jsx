import React, { useEffect, useState } from 'react';
import { CustomH1 } from '../components/Common/CustomText';
import { getAuth } from 'firebase/auth';
import styled from '@emotion/native';

const Landing = ({ navigation: { reset } }) => {
  const [userName, setUserName] = useState('');

  const auth = getAuth();

  useEffect(() => {
    const user = auth?.currentUser;
    setUserName(user?.displayName);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      //푸슝푸슝 이슈
      reset({
        routes: [{ name: 'Tabs', params: { screen: 'Main' } }],
      });
    }, 2000);
  }, [userName]);

  return (
    <LandingContainer>
      <LeftH1>{userName} 님</LeftH1>
      <RightH1>안녕하세요?</RightH1>
    </LandingContainer>
  );
};

const LandingContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  margin: 0 80px;
`;

const LeftH1 = styled(CustomH1)`
  text-align: left;
`;

const RightH1 = styled(CustomH1)`
  text-align: right;
`;

export default Landing;
