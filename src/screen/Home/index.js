import React from 'react';
import {View, Text, FlatList, Dimensions, ImageBackground} from 'react-native';

import Card from '../../components/Card';
import DATA from '../../config/data';
import style from './style';

function Home() {
  function renderItem({item}) {
    return (
      <ImageBackground style={style.backgroundImage} source={item.background}>
        <Card data={item} />
      </ImageBackground>
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
