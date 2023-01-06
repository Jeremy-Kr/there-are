const { loadAsync } = require('expo-font');
const { useEffect, useCallback, useState } = require('react');
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const useSplashScreen = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await loadAsync({
        'NotoSansKr-Bold': require('../assets/fonts/NotoSansKR-Bold.otf'),
        'NotoSansKr-Medium': require('../assets/fonts/NotoSansKR-Medium.otf'),
        'NotoSansKr-Regular': require('../assets/fonts/NotoSansKR-Regular.otf'),
        'YiSunShin-Dotum-B': require('../assets/fonts/YiSunShin-Dotum-B.otf'),
      });
      setAppIsReady(true);
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    onLayoutRootView();
  }, [appIsReady]);

  return { appIsReady };
};

export default useSplashScreen;
