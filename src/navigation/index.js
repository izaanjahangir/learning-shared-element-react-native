import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';

import Home from '../screen/Home';
import Details from '../screen/Details';

enableScreens();
const Stack = createSharedElementStackNavigator();

function navigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        sharedElementsConfig={(route) => {
          const {params} = route;
          const {data = {}} = params;

          return [`item.background.${data._id}`, `item.card.${data._id}`];
        }}
        options={() => ({
          gestureEnabled: false,
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
      />
    </Stack.Navigator>
  );
}

export default navigation;
