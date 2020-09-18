import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import Home from '../screen/Home';
import Details from '../screen/Details';

const Stack = createSharedElementStackNavigator();

function navigation() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default navigation;
