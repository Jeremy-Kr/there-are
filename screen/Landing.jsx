import React from 'react';
import { CustomH1 } from '../components/Common/CustomText';

import styled from '@emotion/native';

const Landing = () => {
  const userName = '이순신';
  return (
    <LandingContainer>
      <LeftH1>{userName} 님</LeftH1>
      <RightH1>안녕하세요?</RightH1>
    </LandingContainer>
  );
};

export default Landing;
const LandingContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LeftH1 = styled(CustomH1)`
  margin-right: 120px;
`;

const RightH1 = styled(CustomH1)`
  margin-left: 90px;
`;
