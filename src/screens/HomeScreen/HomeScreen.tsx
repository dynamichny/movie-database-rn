import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeScreenProps } from '~navigation/navigationTypes'

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
