import React from 'react';
import {View, Text, Image} from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';
import style from './style';

function Details(props) {
  const {route = {}} = props;
  const {params = {}} = route;
  const {data = {}} = params;

  return (
    <>
      <Header />
      <View style={style.container}>
        <Image style={style.backgroundImage} source={data.background} />
        <View style={style.cardContainer}>
          <Card data={data} />
        </View>
      </View>
    </>
  );
}

Details.sharedElements = () => {
  return ['izaan'];
};

export default Details;
