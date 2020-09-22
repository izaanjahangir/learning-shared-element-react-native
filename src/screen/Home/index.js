import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import Card from '../../components/Card';
import DATA from '../../config/data';
import style from './style';

function Home() {
  function renderItem({item}) {
    return (
      <View style={style.cardContainer}>
        <View style={style.imageContainer}>
          <SharedElement id={`item.background.${item._id}`}>
            <Image
              style={style.backgroundImage}
              source={item.background}></Image>
          </SharedElement>
        </View>
        <View style={style.innerCardContainer}>
          <SharedElement id={`item.card.${item._id}`}>
            <Card data={item} />
          </SharedElement>
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={style.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(el) => el._id}
          horizontal={true}
          pagingEnabled
          bounces={false}
        />
      </View>
    </>
  );
}

export default Home;
