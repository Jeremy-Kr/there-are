import React from 'react';
import { CustomH1 } from '../components/Common/CustomText';
import { getAuth } from 'firebase/auth';
import styled from '@emotion/native';

const auth = getAuth();
const user = auth.currentUser;
const userName = user.displayName;

const Landing = () => {
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
