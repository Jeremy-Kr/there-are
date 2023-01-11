import styled from '@emotion/native';
import { CustomSplashTitle } from '../components/Common/CustomText';
import { ActivityIndicator } from 'react-native';
import useResetNavigate from '../hooks/useResetNavigate';
import useSayingQuery from '../hooks/useSayingQuery';

const Splash = () => {
  const { saying, sayingSpeaker, isLoading } = useSayingQuery();
  useResetNavigate('Stacks', 'login');

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <SplashContainer>
      <SplashTitle>{saying}</SplashTitle>
      <SplashTitle>- {sayingSpeaker} -</SplashTitle>
    </SplashContainer>
  );
};

const SplashContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.background};
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SplashTitle = styled(CustomSplashTitle)`
  margin: 0 20px 20px 20px;
`;

export default Splash;
