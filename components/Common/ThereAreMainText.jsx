import React from 'react';
import { CustomTitle } from './CustomText';
import styled from '@emotion/native';

const ThereAreMainText = () => {
  return (
    <MainTextContainer>
      <CustomTitle>There, Are</CustomTitle>
      <CustomTitle>되어라</CustomTitle>
    </MainTextContainer>
  );
};

const MainTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export default ThereAreMainText;
