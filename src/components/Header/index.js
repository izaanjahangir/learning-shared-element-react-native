import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';

function Header() {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={goBack}>
        <Image
          style={style.backArrow}
          source={require('../../assets/left-arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
