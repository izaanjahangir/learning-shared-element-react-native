import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import style from './style';

function Home(props) {
  function navigate() {
    props.navigation.navigate('Details');
  }

  return (
    <View style={style.container}>
      <Image style={style.icon} source={require('../../assets/avatar.png')} />
      <TouchableOpacity onPress={navigate}>
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
