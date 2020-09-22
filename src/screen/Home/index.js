import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';

import Card from '../../components/Card';
import DATA from '../../config/data';
import style from './style';

function Home(props) {
  function renderItem({item}) {
    return <Card data={item} />;
  }

  return (
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
  );
}

export default Home;
