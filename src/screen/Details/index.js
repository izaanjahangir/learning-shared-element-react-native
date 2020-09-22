import React from 'react';
import {View, Text} from 'react-native';

import style from './style';

function Details(props) {
  return (
    <View style={style.container}>
      <Text onPress={() => props.navigation.goBack()}>Back</Text>
    </View>
  );
}

Details.sharedElements = () => {
  return ['izaan'];
};

export default Details;
