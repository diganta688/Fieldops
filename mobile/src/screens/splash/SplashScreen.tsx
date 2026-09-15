import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import Video from 'react-native-video';

import {Progress} from '../../../@/components/ui/progress';
import {colors} from '../../theme/colors';

interface SplashScreenProps {
  onFinish: () => void;
}

const SPLASH_DURATION = 2000;

const SplashScreen = ({
  onFinish,
}: SplashScreenProps): React.JSX.Element => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      const nextProgress = Math.min(
        elapsed / SPLASH_DURATION,
        1,
      );

      setProgress(nextProgress);

      if (nextProgress >= 1) {
        clearInterval(interval);
        onFinish();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <View
      className="flex-1"
      style={{backgroundColor: colors.white}}>

      {/* =========================
          BRAND SECTION
      ========================== */}

      <View className="flex-1 items-center justify-center px-6">

        <Image
          source={require('../../assets/images/fieldops-logo.png')}
          resizeMode="contain"
          className="h-[88px] w-[88px]"
        />

        <Text className="text-[42px] font-extrabold tracking-[-2px]">
          <Text style={{color: colors.primary}}>
            Field
          </Text>

          <Text style={{color: colors.accent}}>
            Ops
          </Text>
        </Text>

        <Text
          className="mt-1 text-[15px] font-medium"
          style={{color: colors.muted}}>
          Field Work. Simplified.
        </Text>

      </View>


      {/* =========================
          DELIVERY VAN VIDEO
      ========================== */}

      <View className="w-full items-center">

        <Video
          source={require('../../assets/images/Delivery_van_driving.mp4')}
          style={{
            width: '100%',
            height: 235,
          }}
          resizeMode="contain"
          repeat
          muted
          paused={false}
        />

      </View>


      {/* =========================
          BOTTOM SECTION
      ========================== */}

      <View className="items-center px-8 pb-12 pt-3">

        <Text
          className="text-center text-[16px] font-semibold leading-6"
          style={{color: colors.primary}}>
          Empowering Field Teams
        </Text>

        <Text
          className="text-center text-[16px] font-semibold leading-6"
          style={{color: colors.primary}}>
          for a Better Tomorrow
        </Text>

        <View className="mt-5 w-[140px]">
          <Progress value={progress * 100} />
        </View>

      </View>

    </View>
  );
};

export default SplashScreen;