import * as React from 'react'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { BottomTabsRoutes } from './routes'
import { BottomTabsParamList } from './navigationTypes'
import HomeScreen from '~screens/HomeScreen/HomeScreen'

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>()

const options: BottomTabNavigationOptions = {
  headerShown: false,
}

const BottomTabsNavigator = () => (
  <BottomTabs.Navigator screenOptions={options}>
    <BottomTabs.Screen component={HomeScreen} name={BottomTabsRoutes.Home} />
  </BottomTabs.Navigator>
)

export default BottomTabsNavigator
