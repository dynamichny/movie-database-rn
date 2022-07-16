import * as React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import BottomTabsNavigator from './BottomNavigator'
import { RootStackNavigatorRoutes } from './routes'
import { RootStackParamList } from './navigationTypes'

const Stack = createStackNavigator<RootStackParamList>()

const options: StackNavigationOptions = { headerShown: false }

const RootStackNavigator = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen
      component={BottomTabsNavigator}
      name={RootStackNavigatorRoutes.BottomTabs}
    />
  </Stack.Navigator>
)

export default RootStackNavigator
