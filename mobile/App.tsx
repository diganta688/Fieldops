import './global.css';

import React, {useEffect, useState} from 'react';
import BootSplash from 'react-native-bootsplash';

import SplashScreen from './src/screens/splash/SplashScreen';
// import HomeScreen from './src/screens/home/HomeScreen';

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      // React Native JS load hoye geche.
      // Ekhon native BootSplash hide korbo.
      await BootSplash.hide({
        fade: true,
      });
    };

    initializeApp();
  }, []);

  if (showSplash) {
    return (
      <SplashScreen
        onFinish={() => {
          setShowSplash(false);
        }}
      />
    );
  }

  return (
    // Ekhane pore HomeScreen bosbe
    // <HomeScreen />
    <> <SplashScreen
        onFinish={() => {
         
        }}
      /></>
  );
}

export default App;