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
