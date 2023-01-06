import { Dimensions } from 'react-native';

// Dimensions API를 통해서 실제 스크린너비와 높이값을 구할 수 있습니다.
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');
