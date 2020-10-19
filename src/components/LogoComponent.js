import React from 'react';
import {useColorScheme, Image} from 'react-native';

const LogoComponent = (props) => {
  const colorScheme = useColorScheme();

  return colorScheme === 'dark' ? (
    <Image source={require('./../assets/logo_dark.png')} style={{...props}} />
  ) : (
    <Image source={require('./../assets/logo_light.png')} style={{...props}} />
  );
};

export default LogoComponent;
