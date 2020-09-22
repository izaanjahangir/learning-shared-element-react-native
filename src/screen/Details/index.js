import React from 'react';
import {View, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

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
        <SharedElement id={`item.background.${data._id}`}>
          <Image style={style.backgroundImage} source={data.background} />
        </SharedElement>
        <View style={style.cardContainer}>
          <SharedElement id={`item.card.${data._id}`}>
            <Card data={data} />
          </SharedElement>
        </View>
      </View>
    </>
  );
}

export default Details;
