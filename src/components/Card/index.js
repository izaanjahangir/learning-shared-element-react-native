import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';

import style from './style';

function Card(props) {
  return (
    <ImageBackground style={style.container} source={props.data.background}>
      <View style={style.cardContainer}>
        <View style={style.headerContainer}>
          <Image style={style.profile} source={props.data.profile} />
          <View style={style.nameContainer}>
            <Text style={style.name}>{props.data.name}</Text>
          </View>
        </View>
        <View style={style.insightContainer}>
          <View style={style.insightChild}>
            <Text style={style.insightAmount}>147</Text>
            <Text style={style.insightName}>Followers</Text>
          </View>
          <View style={style.insightChild}>
            <Text style={style.insightAmount}>147</Text>
            <Text style={style.insightName}>Followers</Text>
          </View>
          <View style={style.insightChild}>
            <Text style={style.insightAmount}>147</Text>
            <Text style={style.insightName}>Followers</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Card;
