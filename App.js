import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import ListScreen from './screens/ListScreen'
import OtherScreen from './screens/OtherScreen'
import ClothesScreen from './screens/ClothesScreen'
import FoodScreen from './screens/FoodScreen'
import SelectScreen from './screens/SelectScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  ListScreen:{screen: ListScreen},
  ClothesScreen:{screen:ClothesScreen},
  OtherScreen:{screen:OtherScreen},
  FoodScreen:{screen:FoodScreen},
  SelectScreen:{screen:SelectScreen}

})

const AppContainer =  createAppContainer(switchNavigator);