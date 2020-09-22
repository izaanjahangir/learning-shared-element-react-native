import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';

function Card(props) {
  const navigation = useNavigation();

  function goToDetails() {
    navigation.navigate('Details', {data: props.data});
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={goToDetails}>
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
    </TouchableOpacity>
  );
}

export default Card;
