import styled from '@emotion/native';

export const CustomSplashTitle = styled.Text`
  color: ${(props) => props.theme.color.mono100};
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: 500;
  font-family: 'YiSunShin-Dotum-B';
`;

export const CustomTitle = styled.Text`
  color: ${(props) => props.theme.color.mono100};
  font-size: ${(props) => props.theme.fontSize.title};
  font-weight: 500;
  font-family: 'NotoSansKr-Medium';
`;

export const CustomH1 = styled.Text`
  color: ${(props) => props.theme.color.mono100};
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: 700;
  font-family: 'NotoSansKr-Bold';
`;

export const CustomH2 = styled.Text`
  color: ${(props) => props.theme.color.mono100};
  font-size: ${(props) => props.theme.fontSize.h2};
  font-weight: 500;
  font-family: 'NotoSansKr-Medium';
`;

export const CustomH3 = styled.Text`
  color: ${(props) => props.theme.color.mono100};
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: 400;
  font-family: 'NotoSansKr-Regular';
`;

export const CustomH4 = styled.Text`
  color: ${(props) => props.theme.color.mono100};
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: 400;
  font-family: 'NotoSansKr-Regular';
`;

export const ButtonText = styled(CustomH3)`
  color: ${(props) => props.theme.color.white100};
  font-size: ${(props) => props.fontSize};
`;
