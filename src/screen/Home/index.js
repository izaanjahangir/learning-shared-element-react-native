import React from 'react';
import {View} from 'react-native';

import style from './style';

function Home(props) {
  function navigate() {
    props.navigation.navigate('Details');
  }

  return <View style={style.container}></View>;
}

export default Home;
