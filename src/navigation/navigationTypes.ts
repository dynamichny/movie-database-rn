import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { RootStackNavigatorRoutes, BottomTabsRoutes } from './routes'

//#region NAVIGATOR TYPES

export type RootStackParamList = {
  [RootStackNavigatorRoutes.BottomTabs]: BottomTabsParamList
}

export type BottomTabsParamList = {
  [BottomTabsRoutes.Home]: undefined
}
//#endregion

//#region SCREEN TYPES

export type HomeScreenProps = BottomTabScreenProps<
  BottomTabsParamList,
  BottomTabsRoutes.Home
>
//#endregion
