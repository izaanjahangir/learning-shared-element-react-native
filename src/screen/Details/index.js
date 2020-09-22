import React from 'react';
import {View, Image, Text} from 'react-native';
import {SharedElement} from "react-navigation-shared-element";

import style from './style';

function Details(props) {
  return (
    <View style={style.container}>
      <Text onPress={() => props.navigation.goBack()}>Back</Text>
      <SharedElement id={`izaan`}>
        <Image style={style.icon} source={require('../../assets/avatar.png')} />
      </SharedElement>
    </View>
  );
}

Details.sharedElements = () => {
  return ["izaan"];
};

export default Details;
