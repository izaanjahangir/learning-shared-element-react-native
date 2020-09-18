import React from 'react';
import {View, Image} from 'react-native';

import style from './style';

function Details() {
  return (
    <View style={style.container}>
      <Image style={style.icon} source={require('../../assets/avatar.png')} />
    </View>
  );
}

export default Details;
